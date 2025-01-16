import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export const CreateStartupForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const session = await supabase.auth.getSession();
      if (!session.data.session) {
        toast({
          title: "Authentication required",
          description: "Please sign in to add a startup",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase.from("startups").insert({
        name,
        description,
        website_url: websiteUrl,
        user_id: session.data.session.user.id,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Startup added successfully!",
      });

      // Reset form
      setName("");
      setDescription("");
      setWebsiteUrl("");
    } catch (error) {
      console.error("Error adding startup:", error);
      toast({
        title: "Error",
        description: "Failed to add startup. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Add New Startup</h3>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter startup name"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Describe your startup"
          className="min-h-[100px]"
        />
      </div>
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
          Website URL
        </label>
        <Input
          id="website"
          type="url"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          placeholder="https://example.com"
        />
      </div>
      <Button type="submit" className="w-full">
        Add Startup
      </Button>
    </form>
  );
};