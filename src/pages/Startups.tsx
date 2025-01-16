import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Star, Plus } from "lucide-react";

const categories = [
  "SaaS",
  "E-commerce",
  "FinTech",
  "HealthTech",
  "EdTech",
  "AI/ML",
  "Mobile Apps",
  "Other",
];

const Startups = () => {
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
      return data;
    },
  });

  const addStartupMutation = useMutation({
    mutationFn: async () => {
      console.log("Adding new startup:", { name, description, websiteUrl, category });
      if (!session?.user?.id) {
        throw new Error("User must be authenticated to add a startup");
      }

      const { data, error } = await supabase.from("startups").insert([
        {
          name,
          description,
          website_url: websiteUrl,
          category,
          user_id: session.user.id,
        },
      ]);

      if (error) {
        console.error("Error adding startup:", error);
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      console.log("Successfully added startup");
      queryClient.invalidateQueries({ queryKey: ["startups"] });
      toast({
        title: "Success",
        description: "Startup added successfully",
      });
      setName("");
      setDescription("");
      setWebsiteUrl("");
      setCategory("");
    },
    onError: (error) => {
      console.error("Error in mutation:", error);
      toast({
        title: "Error",
        description: "Failed to add startup. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting startup form");
    addStartupMutation.mutate();
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      <PageSEO 
        title="Startup Directory & Reviews"
        description="Discover innovative startups, read reviews, and connect with founders. Browse our curated list of emerging companies across various industries."
      />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8">Startup Directory</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mb-8">
              <Plus className="w-4 h-4 mr-2" />
              Add Startup
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Startup</DialogTitle>
              <DialogDescription>
                Share details about a startup to help others discover it
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Startup Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  type="url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" disabled={addStartupMutation.isPending}>
                {addStartupMutation.isPending ? "Adding..." : "Add Startup"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {startups.map((startup) => (
              <Card key={startup.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{startup.name}</span>
                    <div className="flex items-center">
                      {renderStars(startup.rating || 0)}
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({startup.total_ratings || 0})
                      </span>
                    </div>
                  </CardTitle>
                  <CardDescription>{startup.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{startup.description}</p>
                  {startup.website_url && (
                    <Button variant="outline" asChild className="w-full">
                      <a
                        href={startup.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Startups;