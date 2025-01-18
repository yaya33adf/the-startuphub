import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { StartupBasicInfo } from "./form/StartupBasicInfo";
import { StartupContactInfo } from "./form/StartupContactInfo";
import { StartupInvestmentInfo } from "./form/StartupInvestmentInfo";

export const CreateStartupForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [hyperEmail, setHyperEmail] = useState("");
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
        hyper_email: hyperEmail,
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
      setHyperEmail("");
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
      
      <StartupBasicInfo
        name={name}
        description={description}
        websiteUrl={websiteUrl}
        onNameChange={setName}
        onDescriptionChange={setDescription}
        onWebsiteUrlChange={setWebsiteUrl}
      />

      <StartupContactInfo
        hyperEmail={hyperEmail}
        onHyperEmailChange={setHyperEmail}
      />

      <StartupInvestmentInfo
        investmentType={investmentType}
        investmentAmount={investmentAmount}
        onInvestmentTypeChange={setInvestmentType}
        onInvestmentAmountChange={setInvestmentAmount}
      />

      <Button type="submit" className="w-full">
        Add Startup
      </Button>
    </form>
  );
};