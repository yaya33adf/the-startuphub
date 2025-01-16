import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Note {
  id: string;
  content: string;
  created_at: string;
}

export const NotesWidget = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) return;

    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching notes:", error);
      return;
    }

    setNotes(data || []);
  };

  const saveNote = async () => {
    if (!currentNote.trim()) {
      toast({
        title: "Note cannot be empty",
        variant: "destructive",
      });
      return;
    }

    const { data: user } = await supabase.auth.getUser();
    if (!user.user) {
      toast({
        title: "Please sign in to save notes",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase.from("notes").insert([
      {
        content: currentNote,
        user_id: user.user.id,
      },
    ]);

    if (error) {
      toast({
        title: "Error saving note",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Note saved successfully",
    });

    setCurrentNote("");
    fetchNotes();
  };

  const deleteNote = async (id: string) => {
    const { error } = await supabase.from("notes").delete().eq("id", id);

    if (error) {
      toast({
        title: "Error deleting note",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Note deleted successfully",
    });

    fetchNotes();
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Textarea
          placeholder="Write your note here..."
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          className="min-h-[100px]"
        />
        <Button onClick={saveNote} className="w-full">
          Save Note
        </Button>
      </div>

      <div className="space-y-2">
        {notes.map((note) => (
          <div
            key={note.id}
            className="p-3 bg-secondary rounded-lg flex justify-between items-start gap-2"
          >
            <p className="text-sm whitespace-pre-wrap flex-1">{note.content}</p>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};