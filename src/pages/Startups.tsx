import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Star, Link as LinkIcon, Plus } from "lucide-react";

interface Startup {
  id: string;
  name: string;
  description: string;
  website_url?: string;
  category?: string;
  rating: number;
  total_ratings: number;
}

const Startups = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [category, setCategory] = useState("");
  const [session, setSession] = useState<any>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  const { data: startups = [], isLoading } = useQuery({
    queryKey: ["startups"],
    queryFn: async () => {
      console.log("Fetching startups...");
      const { data, error } = await supabase
        .from("startups")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching startups:", error);
        throw error;
      }

      console.log("Fetched startups:", data);
      return data as Startup[];
    },
  });

  const createStartupMutation = useMutation({
    mutationFn: async (newStartup: Omit<Startup, "id" | "rating" | "total_ratings">) => {
      if (!session?.user?.id) {
        throw new Error("Must be logged in to create a startup");
      }

      const { data, error } = await supabase
        .from("startups")
        .insert([{ ...newStartup, user_id: session.user.id }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["startups"] });
      setIsOpen(false);
      resetForm();
      toast({
        title: "Success",
        description: "Your startup has been added successfully!",
      });
    },
    onError: (error) => {
      console.error("Error creating startup:", error);
      toast({
        title: "Error",
        description: "Failed to create startup. Please try again.",
        variant: "destructive",
      });
    },
  });

  const rateStartupMutation = useMutation({
    mutationFn: async ({ startupId, rating }: { startupId: string; rating: number }) => {
      if (!session?.user?.id) {
        throw new Error("Must be logged in to rate");
      }

      const { error } = await supabase
        .from("startup_ratings")
        .upsert(
          {
            startup_id: startupId,
            user_id: session.user.id,
            rating,
          },
          { onConflict: "startup_id,user_id" }
        );

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["startups"] });
      toast({
        title: "Success",
        description: "Rating submitted successfully!",
      });
    },
    onError: (error) => {
      console.error("Error rating startup:", error);
      toast({
        title: "Error",
        description: "Failed to submit rating. Please try again.",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setName("");
    setDescription("");
    setWebsiteUrl("");
    setCategory("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createStartupMutation.mutate({
      name,
      description,
      website_url: websiteUrl,
      category,
    });
  };

  const handleRate = (startupId: string, rating: number) => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to rate startups",
        variant: "destructive",
      });
      return;
    }
    rateStartupMutation.mutate({ startupId, rating });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8">Loading startups...</h1>
      </div>
    );
  }

  return (
    <>
      <PageSEO 
        title="Startup Directory & Launches"
        description="Discover innovative startups, track launch progress, and connect with founders in our comprehensive startup directory."
      />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8">Startup Launches</h1>
        <div className="flex justify-between items-center mb-8">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Startup
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Startup</DialogTitle>
                <DialogDescription>
                  Share your startup with the community. Fill in the details below.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Startup Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium mb-1">
                    Website URL
                  </label>
                  <Input
                    id="website"
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-1">
                    Category
                  </label>
                  <Input
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <Card key={startup.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{startup.name}</CardTitle>
                    {startup.category && (
                      <CardDescription>{startup.category}</CardDescription>
                    )}
                  </div>
                  {startup.website_url && (
                    <a
                      href={startup.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{startup.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Button
                        key={star}
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRate(startup.id, star)}
                        className={`p-1 ${
                          startup.rating >= star ? "text-yellow-500" : "text-gray-300"
                        }`}
                      >
                        <Star className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {startup.total_ratings} ratings
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Startups;
