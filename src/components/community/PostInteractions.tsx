import { ThumbsUp, MessageCircle, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

interface PostInteractionsProps {
  likes: number;
  comments: number;
}

export const PostInteractions = ({ likes, comments }: PostInteractionsProps) => {
  return (
    <CardFooter className="border-t pt-4">
      <div className="flex justify-between w-full">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <ThumbsUp className="w-4 h-4 mr-2" />
          {likes || 0} Likes
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <MessageCircle className="w-4 h-4 mr-2" />
          {comments || 0} Comments
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Bookmark className="w-4 h-4 mr-2" />
          Save
        </Button>
      </div>
    </CardFooter>
  );
};