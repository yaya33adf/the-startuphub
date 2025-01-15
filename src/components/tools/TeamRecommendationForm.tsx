import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "@supabase/auth-helpers-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Json } from "@/integrations/supabase/types";
import { RecommendationForm } from "./team-recommendation/RecommendationForm";
import { RecommendationList } from "./team-recommendation/RecommendationList";
import { generateTeamRoles } from "./team-recommendation/generateTeamRoles";
import { FormData, TeamRecommendation } from "./team-recommendation/types";

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
          <RecommendationForm
            formData={formData}
            onFormDataChange={setFormData}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
      <RecommendationList recommendations={recommendations} />
    </div>
  );
};