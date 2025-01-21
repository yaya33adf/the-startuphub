import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import { RoadmapForm } from "@/components/admin/roadmap/RoadmapForm";
import { RoadmapList } from "@/components/admin/roadmap/RoadmapList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RoadmapManager = () => {
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const { data: roadmaps, isLoading, refetch } = useQuery({
    queryKey: ['roadmaps'],
    queryFn: async () => {
      console.log("Fetching roadmaps...");
      const { data, error } = await supabase
        .from('roadmap_templates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching roadmaps:", error);
        toast({
          title: "Error",
          description: "Failed to fetch roadmaps",
          variant: "destructive",
        });
        throw error;
      }

      return data;
    },
  });

  return (
    <div className="container py-8">
      <PageSEO 
        title="Manage Roadmaps" 
        description="Admin interface for managing career roadmaps"
      />
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Roadmaps</h1>
        <Button onClick={() => setIsCreating(true)} disabled={isCreating}>
          <Plus className="h-4 w-4 mr-2" />
          Add Roadmap
        </Button>
      </div>

      {isCreating && (
        <RoadmapForm
          onSuccess={() => {
            setIsCreating(false);
            refetch();
          }}
          onCancel={() => setIsCreating(false)}
        />
      )}

      <RoadmapList 
        roadmaps={roadmaps || []} 
        isLoading={isLoading}
        onUpdate={refetch}
      />
    </div>
  );
};

export default RoadmapManager;