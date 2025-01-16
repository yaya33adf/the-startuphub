import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StartupRating } from "./StartupRating";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface StartupCardProps {
  startup: {
    id: string;
    name: string;
    description: string;
    website_url?: string;
    rating: number;
    total_ratings: number;
  };
}

export const StartupCard = ({ startup }: StartupCardProps) => {
  const [currentRating, setCurrentRating] = useState<number>(startup.rating);
  const [totalRatings, setTotalRatings] = useState<number>(startup.total_ratings);
  const { toast } = useToast();

  const handleRatingUpdate = async (newRating: number) => {
    try {
      const session = await supabase.auth.getSession();
      if (!session.data.session) {
        toast({
          title: "Authentication required",
          description: "Please sign in to rate startups",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from("startup_ratings")
        .upsert({
          startup_id: startup.id,
          user_id: session.data.session.user.id,
          rating: newRating,
        });

      if (error) throw error;

      setCurrentRating(newRating);
      setTotalRatings((prev) => prev + 1);
      
      toast({
        title: "Rating updated",
        description: "Thank you for your feedback!",
      });
    } catch (error) {
      console.error("Error updating rating:", error);
      toast({
        title: "Error",
        description: "Failed to update rating. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{startup.name}</span>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span>{currentRating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">
              ({totalRatings})
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{startup.description}</p>
        {startup.website_url && (
          <a
            href={startup.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Visit Website
          </a>
        )}
        <div className="mt-4">
          <StartupRating onRate={handleRatingUpdate} />
        </div>
      </CardContent>
    </Card>
  );
};