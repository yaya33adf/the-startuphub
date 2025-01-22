import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Building2, Globe, Mail } from "lucide-react";
import type { Investor } from "@/types/investors";

interface InvestorGridProps {
  investors: Investor[];
}

export const InvestorGrid = ({ investors }: InvestorGridProps) => {
  return (
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
  );
};