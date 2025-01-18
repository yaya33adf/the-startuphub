import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageSEO } from "@/components/seo/PageSEO";
import { Button } from "@/components/ui/button";
import { Plus, User } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Community = () => {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    content: "",
    tags: "",
  });

  useEffect(() => {
    // Check authentication status
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAskQuestion = () => {
    if (!session) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to ask a question",
        variant: "destructive",
      });
      navigate("/auth/signin");
      return;
    }
    setOpen(true);
  };

  const handleSubmitQuestion = () => {
    // This will be implemented later when we add the backend integration
    console.log("Submitting question:", newQuestion);
    setOpen(false);
  };

  return (
    <>
      <PageSEO 
        title="Community Questions"
        description="View and ask questions in our community."
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Community Questions</h1>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleAskQuestion}>
                  <Plus className="w-4 h-4 mr-2" />
                  Ask Question
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Ask a Question</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="text-sm font-medium">Title</label>
                    <Input
                      id="title"
                      value={newQuestion.title}
                      onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                      placeholder="What's your question?"
                    />
                  </div>
                  <div>
                    <label htmlFor="content" className="text-sm font-medium">Details</label>
                    <Textarea
                      id="content"
                      value={newQuestion.content}
                      onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                      placeholder="Provide more details about your question..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="tags" className="text-sm font-medium">Tags</label>
                    <Input
                      id="tags"
                      value={newQuestion.tags}
                      onChange={(e) => setNewQuestion({ ...newQuestion, tags: e.target.value })}
                      placeholder="Add tags separated by commas (e.g., startup, funding, marketing)"
                    />
                  </div>
                  <Button onClick={handleSubmitQuestion} className="w-full">
                    Submit Question
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Sample Question Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">How to validate my startup idea?</CardTitle>
                  <CardDescription className="text-sm">
                    Posted by John Doe on January 15, 2024
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                I have an idea for a SaaS product targeting small businesses, but I'm not sure how to validate if there's actual demand. What are some effective ways to test market interest before investing significant time and resources?
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                  startup
                </span>
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                  validation
                </span>
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                  market-research
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Community;