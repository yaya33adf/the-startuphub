import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

interface TeamRole {
  role: string;
  count: number;
}

interface RecommendationData {
  recommended_roles: TeamRole[];
}

export const StartupRecommendationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    project_name: "",
    project_description: "",
    project_type: "",
    project_size: "",
  });

  const { data: recommendation, isLoading } = useQuery({
    queryKey: ["team-recommendation", formData.project_type, formData.project_size],
    queryFn: async () => {
      if (!formData.project_type || !formData.project_size) return null;
      
      const { data, error } = await supabase
        .from("team_recommendations")
        .select("recommended_roles")
        .eq("project_type", formData.project_type)
        .eq("project_size", formData.project_size)
        .single();

      if (error) throw error;
      return data as RecommendationData;
    },
    enabled: !!formData.project_type && !!formData.project_size
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.project_name || !formData.project_type || !formData.project_size) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from("team_recommendations")
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Team recommendation generated successfully",
      });
    } catch (error) {
      console.error("Error generating recommendation:", error);
      toast({
        title: "Error",
        description: "Failed to generate team recommendation",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get Team Recommendations</CardTitle>
        <CardDescription>
          Tell us about your startup to get personalized team recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Project/Startup Name"
              value={formData.project_name}
              onChange={(e) => setFormData({ ...formData, project_name: e.target.value })}
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Project Description"
              value={formData.project_description}
              onChange={(e) => setFormData({ ...formData, project_description: e.target.value })}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              value={formData.project_type}
              onValueChange={(value) => setFormData({ ...formData, project_type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Project Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Application</SelectItem>
                <SelectItem value="mobile">Mobile App</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="marketplace">Marketplace</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={formData.project_size}
              onValueChange={(value) => setFormData({ ...formData, project_size: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Project Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small (1-3 people)</SelectItem>
                <SelectItem value="medium">Medium (4-10 people)</SelectItem>
                <SelectItem value="large">Large (10+ people)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {recommendation?.recommended_roles && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Recommended Team Structure:</h4>
              <ul className="space-y-2">
                {recommendation.recommended_roles.map((role: TeamRole, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{role.role}</span>
                    <span className="text-muted-foreground">×{role.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button type="submit" className="w-full">
            Get Recommendations
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};