import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "@supabase/auth-helpers-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Json } from "@/integrations/supabase/types";

interface FormData {
  project_name: string;
  project_description: string;
  project_type: string;
  project_size: string;
  budget_range: string;
  timeline: string;
}

interface TeamRole {
  role: string;
  count: number;
}

interface TeamRecommendation extends FormData {
  id: string;
  user_id: string | null;
  recommended_roles: TeamRole[];
  created_at?: string;
  updated_at?: string;
}

export const TeamRecommendationForm = () => {
  const { toast } = useToast();
  const session = useSession();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<FormData>({
    project_name: "",
    project_description: "",
    project_type: "",
    project_size: "",
    budget_range: "",
    timeline: "",
  });

  const { data: recommendations = [], isLoading } = useQuery({
    queryKey: ["team-recommendations"],
    queryFn: async () => {
      console.log("Fetching team recommendations...");
      const { data, error } = await supabase
        .from("team_recommendations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching recommendations:", error);
        throw error;
      }

      // Transform the data to ensure recommended_roles is properly typed
      const transformedData: TeamRecommendation[] = (data || []).map((item) => ({
        ...item,
        recommended_roles: (item.recommended_roles as any[] || []).map((role: any) => ({
          role: role.role as string,
          count: role.count as number,
        })),
      }));

      console.log("Recommendations fetched:", transformedData);
      return transformedData;
    },
  });

  const generateTeamRoles = (data: typeof formData): TeamRole[] => {
    const roles: TeamRole[] = [];
    
    switch (data.project_type) {
      case "web":
        roles.push(
          { role: "Frontend Developer", count: data.project_size === "large" ? 2 : 1 },
          { role: "Backend Developer", count: data.project_size === "large" ? 2 : 1 },
          { role: "UI/UX Designer", count: 1 },
          { role: "Project Manager", count: 1 }
        );
        break;
      case "mobile":
        roles.push(
          { role: "Mobile Developer", count: data.project_size === "large" ? 3 : 2 },
          { role: "UI/UX Designer", count: 1 },
          { role: "QA Engineer", count: 1 },
          { role: "Project Manager", count: 1 }
        );
        break;
      case "marketing":
        roles.push(
          { role: "Marketing Manager", count: 1 },
          { role: "Content Creator", count: data.project_size === "large" ? 2 : 1 },
          { role: "Social Media Specialist", count: 1 },
          { role: "Graphic Designer", count: 1 }
        );
        break;
      default:
        roles.push(
          { role: "Project Manager", count: 1 },
          { role: "Team Lead", count: 1 },
          { role: "Team Member", count: data.project_size === "large" ? 3 : 2 }
        );
    }
    
    return roles;
  };

  const generateRecommendationMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      if (!session?.user?.id) {
        throw new Error("User must be logged in to generate recommendations");
      }

      console.log("Generating team recommendation:", formData);
      const recommendedRoles = generateTeamRoles(formData);
      const { data, error } = await supabase
        .from("team_recommendations")
        .insert({
          ...formData,
          user_id: session.user.id,
          recommended_roles: recommendedRoles as unknown as Json,
        })
        .select()
        .single();

      if (error) throw error;
      return {
        ...data,
        recommended_roles: recommendedRoles,
      } as TeamRecommendation;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team-recommendations"] });
      toast({
        title: "Success",
        description: "Team recommendation generated successfully",
      });
      setFormData({
        project_name: "",
        project_description: "",
        project_type: "",
        project_size: "",
        budget_range: "",
        timeline: "",
      });
    },
    onError: (error) => {
      console.error("Error generating recommendation:", error);
      toast({
        title: "Error",
        description: "Failed to generate team recommendation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user) {
      toast({
        title: "Error",
        description: "Please sign in to generate team recommendations",
        variant: "destructive",
      });
      return;
    }
    if (!formData.project_name || !formData.project_type || !formData.project_size) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    generateRecommendationMutation.mutate(formData);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Team Recommendation</CardTitle>
          <CardDescription>
            Fill in your project details to get a personalized team recommendation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="project_name">Project Name</Label>
                <Input
                  id="project_name"
                  value={formData.project_name}
                  onChange={(e) =>
                    setFormData({ ...formData, project_name: e.target.value })
                  }
                  placeholder="Enter project name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project_type">Project Type</Label>
                <Select
                  value={formData.project_type}
                  onValueChange={(value) =>
                    setFormData({ ...formData, project_type: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile App</SelectItem>
                    <SelectItem value="marketing">Marketing Campaign</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="project_size">Project Size</Label>
                <Select
                  value={formData.project_size}
                  onValueChange={(value) =>
                    setFormData({ ...formData, project_size: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select project size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget_range">Budget Range</Label>
                <Select
                  value={formData.budget_range}
                  onValueChange={(value) =>
                    setFormData({ ...formData, budget_range: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">$10k - $50k</SelectItem>
                    <SelectItem value="medium">$50k - $100k</SelectItem>
                    <SelectItem value="high">$100k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="project_description">Project Description</Label>
                <Textarea
                  id="project_description"
                  value={formData.project_description}
                  onChange={(e) =>
                    setFormData({ ...formData, project_description: e.target.value })
                  }
                  placeholder="Describe your project"
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Generate Recommendation
            </Button>
          </form>
        </CardContent>
      </Card>

      {recommendations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Your Team Recommendations</CardTitle>
            <CardDescription>Based on your project requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <Card key={rec.id} className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{rec.project_name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {rec.project_description}
                  </p>
                  <div className="grid gap-2">
                    {rec.recommended_roles.map((role: any, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 bg-secondary/50 rounded-md"
                      >
                        <span>{role.role}</span>
                        <span className="text-sm text-muted-foreground">
                          × {role.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
