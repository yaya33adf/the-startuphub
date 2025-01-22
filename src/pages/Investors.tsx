import { useEffect, useState } from "react";
import { PageSEO } from "@/components/seo/PageSEO";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Building2, Globe, Users, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { InvestorForm } from "@/components/investors/InvestorForm";

interface Investor {
  id: string;
  name: string;
  email: string;
  user_type: string;
  investment_preferences?: string[];
  country?: string;
  company?: string;
  investment_stage?: string;
  image_url?: string;
}

const Investors = () => {
  const [investors, setInvestors] = useState<Investor[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchInvestors();
  }, []);

  const fetchInvestors = async () => {
    try {
      console.log("Fetching investors...");
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_type', 'investor');

      if (error) {
        console.error("Error fetching investors:", error);
        toast({
          title: "Error",
          description: "Failed to load investors",
          variant: "destructive",
        });
        return;
      }

      console.log("Fetched investors:", data);
      setInvestors(data || []);
    } catch (error) {
      console.error("Error in fetchInvestors:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <PageSEO
        title="Investors | Connect with Startup Investors"
        description="Connect with investors interested in funding innovative startups and business ventures."
      />
      
      <div className="space-y-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Connect with Investors</h1>
          <p className="text-lg text-muted-foreground">
            Discover and connect with investors who are actively looking to fund the next big innovation.
          </p>
        </div>

        <InvestorForm />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investors.map((investor) => (
              <Card key={investor.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {investor.image_url ? (
                      <img 
                        src={investor.image_url} 
                        alt={investor.name} 
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-lg">{investor.name || 'Anonymous Investor'}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {investor.company || investor.user_type}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {investor.country && (
                    <p className="text-sm flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      {investor.country}
                    </p>
                  )}
                  
                  {investor.investment_stage && (
                    <p className="text-sm bg-accent text-accent-foreground inline-block px-2 py-1 rounded-full">
                      {investor.investment_stage}
                    </p>
                  )}

                  {investor.investment_preferences && (
                    <div className="flex flex-wrap gap-2">
                      {investor.investment_preferences.map((pref, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                        >
                          {pref}
                        </span>
                      ))}
                    </div>
                  )}

                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => window.location.href = `mailto:${investor.email}`}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Investor
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {!loading && investors.length === 0 && (
          <Card className="p-8 text-center">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Investors Found</h3>
            <p className="text-muted-foreground">
              There are currently no registered investors. Use the Add Investor button to create one.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Investors;