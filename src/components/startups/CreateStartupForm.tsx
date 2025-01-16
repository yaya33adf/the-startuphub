import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CreateStartupForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
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
        funding_type: investmentType,
        funding_amount: investmentAmount ? parseFloat(investmentAmount) : null,
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
      setInvestmentType("");
      setInvestmentAmount("");
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
      <div>
        <label htmlFor="investmentType" className="block text-sm font-medium text-gray-700 mb-1">
          Investment Type
        </label>
        <Select value={investmentType} onValueChange={setInvestmentType}>
          <SelectTrigger id="investmentType">
            <SelectValue placeholder="Select investment type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pre-seed">Pre-Seed</SelectItem>
            <SelectItem value="seed">Seed</SelectItem>
            <SelectItem value="series-a">Series A</SelectItem>
            <SelectItem value="series-b">Series B</SelectItem>
            <SelectItem value="series-c">Series C</SelectItem>
            <SelectItem value="growth">Growth</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-1">
          Investment Amount Needed ($)
        </label>
        <Input
          id="investmentAmount"
          type="number"
          min="0"
          step="1000"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          placeholder="Enter amount in USD"
        />
      </div>
      <Button type="submit" className="w-full">
        Add Startup
      </Button>
    </form>
  );
};