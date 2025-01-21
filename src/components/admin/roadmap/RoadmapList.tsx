import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { RoadmapForm } from "./RoadmapForm";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Edit, Trash, Loader2 } from "lucide-react";

interface RoadmapListProps {
  roadmaps: Array<{
    id: string;
    title: string;
    description: string;
    slug: string;
    created_at: string;
  }>;
  isLoading: boolean;
  onUpdate: () => void;
}

export function RoadmapList({ roadmaps, isLoading, onUpdate }: RoadmapListProps) {
  const [editingRoadmap, setEditingRoadmap] = useState<any>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    console.log("Deleting roadmap:", id);
    try {
      const { error } = await supabase
        .from('roadmap_templates')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Roadmap deleted successfully",
      });
      onUpdate();
    } catch (error) {
      console.error("Error deleting roadmap:", error);
      toast({
        title: "Error",
        description: "Failed to delete roadmap",
        variant: "destructive",
      });
    } finally {
      setDeletingId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (editingRoadmap) {
    return (
      <RoadmapForm
        roadmap={editingRoadmap}
        onSuccess={() => {
          setEditingRoadmap(null);
          onUpdate();
        }}
        onCancel={() => setEditingRoadmap(null)}
      />
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roadmaps.map((roadmap) => (
            <TableRow key={roadmap.id}>
              <TableCell>{roadmap.title}</TableCell>
              <TableCell>{roadmap.slug}</TableCell>
              <TableCell>
                {new Date(roadmap.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingRoadmap(roadmap)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Roadmap</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this roadmap? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(roadmap.id)}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          {deletingId === roadmap.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            "Delete"
                          )}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}