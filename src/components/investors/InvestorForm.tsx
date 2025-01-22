import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { BasicInfoFields } from "./form-fields/BasicInfoFields";
import { CompanyFields } from "./form-fields/CompanyFields";
import { ImageUrlField } from "./form-fields/ImageUrlField";

export function InvestorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [investmentStage, setInvestmentStage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [previousWork, setPreviousWork] = useState("");
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
      console.log("Submitting investor profile with previous work:", previousWork);
      
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
          user_type: 'investor',
          previous_work: previousWork
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
      setPreviousWork("");
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
          <BasicInfoFields
            name={name}
            email={email}
            previousWork={previousWork}
            onNameChange={setName}
            onEmailChange={setEmail}
            onPreviousWorkChange={setPreviousWork}
          />
          
          <ImageUrlField
            imageUrl={imageUrl}
            onImageUrlChange={setImageUrl}
          />

          <CompanyFields
            country={country}
            company={company}
            investmentStage={investmentStage}
            onCountryChange={setCountry}
            onCompanyChange={setCompany}
            onInvestmentStageChange={setInvestmentStage}
          />

          <Button type="submit" className="w-full">
            Create Investor Profile
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}