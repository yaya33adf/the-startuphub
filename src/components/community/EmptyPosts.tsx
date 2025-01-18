import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EmptyPosts = () => {
  return (
    <Card className="p-8 text-center">
      <CardContent className="flex flex-col items-center space-y-4">
        <MessageCircle className="w-12 h-12 text-muted-foreground" />
        <div>
          <h3 className="text-lg font-semibold">No discussions yet</h3>
          <p className="text-muted-foreground">
            Be the first to start a discussion! Share your thoughts and questions with the community.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};