import { Button } from "@/components/ui/button";
import { Loader2, Plus, Trash2 } from "lucide-react";

interface BlogPostActionsProps {
  isSubmitting: boolean;
  isDeleting: boolean;
  currentPostId: string | null;
  onDelete: (postId: string) => void;
}

export const BlogPostActions = ({
  isSubmitting,
  isDeleting,
  currentPostId,
  onDelete,
}: BlogPostActionsProps) => {
  return (
    <div className="flex justify-between items-center">
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating...
          </>
        ) : (
          <>
            <Plus className="mr-2 h-4 w-4" />
            Create Post
          </>
        )}
      </Button>
      <Button 
        type="button" 
        variant="destructive"
        onClick={() => currentPostId && onDelete(currentPostId)}
        disabled={isDeleting || !currentPostId}
      >
        {isDeleting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Deleting...
          </>
        ) : (
          <>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Post
          </>
        )}
      </Button>
    </div>
  );
};