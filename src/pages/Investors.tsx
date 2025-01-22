import { useEffect, useState } from "react";
import { PageSEO } from "@/components/seo/PageSEO";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { InvestorForm } from "@/components/investors/InvestorForm";
import { InvestorSearchFilters } from "@/components/investors/InvestorSearchFilters";
import { InvestorGrid } from "@/components/investors/InvestorGrid";
import { EmptyInvestorState } from "@/components/investors/EmptyInvestorState";
import type { Investor } from "@/types/investors";

const Investors = () => {
  const [investors, setInvestors] = useState<Investor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
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

  const filteredInvestors = investors.filter(investor => {
    const nameMatch = !searchName || 
      (investor.name && investor.name.toLowerCase().includes(searchName.toLowerCase()));
    const countryMatch = selectedCountry === "all" || 
      (investor.country && investor.country === selectedCountry);
    return nameMatch && countryMatch;
  });

  const uniqueCountries = [...new Set(investors.filter(i => i.country).map(i => i.country))];

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

        <InvestorSearchFilters
          searchName={searchName}
          selectedCountry={selectedCountry}
          uniqueCountries={uniqueCountries}
          onSearchNameChange={setSearchName}
          onCountryChange={setSelectedCountry}
        />

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
        ) : filteredInvestors.length > 0 ? (
          <InvestorGrid investors={filteredInvestors} />
        ) : (
          <EmptyInvestorState 
            hasFilters={searchName !== "" || selectedCountry !== "all"} 
          />
        )}
      </div>
    </div>
  );
};

export default Investors;