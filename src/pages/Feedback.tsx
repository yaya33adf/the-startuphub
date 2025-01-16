import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { IdeaForm } from "@/components/feedback/IdeaForm";
import { IdeaCard } from "@/components/feedback/IdeaCard";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { PageSEO } from "@/components/seo/PageSEO";

const Feedback = () => {
  // Fetch all feedback ideas
  const { data: ideas = [], isLoading } = useQuery({
    queryKey: ['feedback'],
    queryFn: async () => {
      console.log('Fetching feedback ideas...');
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching feedback:', error);
        throw error;
      }
      
      console.log('Fetched feedback ideas:', data);
      return data;
    },
  });

  return (
    <>
      <PageSEO 
        title="Business Ideas & Feedback"
        description="Share your business ideas and get valuable feedback from our community of entrepreneurs and industry experts."
      />
      <div className="container py-10">
        <h1 className="text-4xl font-bold mb-8">Business Ideas</h1>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {ideas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
        )}
        <IdeaForm />
      </div>
    </>
  );
};

export default Feedback;
