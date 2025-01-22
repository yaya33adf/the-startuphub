import { useEffect, useState } from "react";
import { PageSEO } from "@/components/seo/PageSEO";
import { IdeaForm } from "@/components/feedback/IdeaForm";
import { IdeaCard } from "@/components/feedback/IdeaCard";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

interface Feedback {
  id: string;
  idea_title: string;
  idea_description: string;
  created_at: string;
  rating: number | null;
  comment_text: string | null;
}

const Feedback = () => {
  const { data: feedbackItems, isLoading } = useQuery({
    queryKey: ['feedback'],
    queryFn: async () => {
      console.log('Fetching feedback items...');
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching feedback:', error);
        throw error;
      }

      console.log('Fetched feedback items:', data);
      return data as Feedback[];
    },
  });

  return (
    <div className="container py-8">
      <PageSEO
        title="Feedback | Share Your Thoughts"
        description="Share your feedback and help us improve our platform for startups and entrepreneurs."
      />
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Share Your Ideas</h1>
        <IdeaForm />
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-lg text-muted-foreground">
          Share your business ideas and get valuable feedback from the community. Help others by providing constructive feedback on their ideas.
        </p>
      </div>

      <div className="grid gap-6">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading ideas...</p>
          </div>
        ) : feedbackItems?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No ideas shared yet. Be the first!</p>
          </div>
        ) : (
          feedbackItems?.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))
        )}
      </div>
    </div>
  );
};

export default Feedback;