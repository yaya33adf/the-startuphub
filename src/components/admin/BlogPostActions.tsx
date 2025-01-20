import { Button } from "@/components/ui/button";
import { Loader2, Plus, Trash2, Send } from "lucide-react";

interface BlogPostActionsProps {
  isSubmitting: boolean;
  isDeleting: boolean;
  isPublishing?: boolean;
  currentPostId: string | null;
  onDelete: (postId: string) => void;
  onPublish?: (postId: string) => void;
}

export const BlogPostActions = ({
  isSubmitting,
  isDeleting,
  isPublishing,
  currentPostId,
  onDelete,
  onPublish,
}: BlogPostActionsProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
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
        
        {currentPostId && onPublish && (
          <Button 
            type="button"
            variant="outline"
            onClick={() => onPublish(currentPostId)}
            disabled={isPublishing}
          >
            {isPublishing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Publishing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Publish
              </>
            )}
          </Button>
        )}
      </div>

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