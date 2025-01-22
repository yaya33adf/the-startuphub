import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, User, Mail, Globe, Building2, Image } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

export function InvestorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [investmentStage, setInvestmentStage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to create an investor profile",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          name,
          email,
          country,
          company,
          investment_stage: investmentStage,
          image_url: imageUrl,
          user_type: 'investor'
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Investor profile created successfully",
      });

      // Reset form
      setName("");
      setEmail("");
      setCountry("");
      setCompany("");
      setInvestmentStage("");
      setImageUrl("");
    } catch (error) {
      console.error('Error creating investor:', error);
      toast({
        title: "Error",
        description: "Failed to create investor profile",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-6">
          <Plus className="h-4 w-4 mr-2" />
          Add Investor
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Investor</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              <User className="h-4 w-4 inline mr-2" />
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter investor name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">
              <Mail className="h-4 w-4 inline mr-2" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">
              <Image className="h-4 w-4 inline mr-2" />
              Image URL
            </Label>
            <Input
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">
              <Globe className="h-4 w-4 inline mr-2" />
              Country
            </Label>
            <Input
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter country"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">
              <Building2 className="h-4 w-4 inline mr-2" />
              Company
            </Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="investmentStage">Investment Stage</Label>
            <Select value={investmentStage} onValueChange={setInvestmentStage}>
              <SelectTrigger>
                <SelectValue placeholder="Select investment stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seed">Seed</SelectItem>
                <SelectItem value="early">Early Stage</SelectItem>
                <SelectItem value="growth">Growth Stage</SelectItem>
                <SelectItem value="late">Late Stage</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Create Investor Profile
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}