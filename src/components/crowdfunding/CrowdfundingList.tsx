import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

interface Company {
  id: string;
  name: string;
  description?: string;
  category?: string;
  website_url?: string;
  funding_goal?: number;
  current_funding?: number;
  score?: number;
}

interface CrowdfundingListProps {
  companies: Company[];
  isLoading: boolean;
}

export const CrowdfundingList = ({ companies, isLoading }: CrowdfundingListProps) => {
  if (isLoading) {
    return <div className="text-center">Loading projects...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {companies.map((company) => (
        <Card key={company.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-xl">{company.name}</CardTitle>
              <div className="flex items-center gap-1 text-green-600">
                <span className="font-bold">{company.score}</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">{company.category}</div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{company.description}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Funding Goal:</span>
                <span className="font-medium">${company.funding_goal?.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Current Funding:</span>
                <span className="font-medium">${company.current_funding?.toLocaleString()}</span>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-green-100">
                  <div
                    style={{
                      width: `${Math.min(
                        ((company.current_funding || 0) / (company.funding_goal || 1)) * 100,
                        100
                      )}%`,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  />
                </div>
              </div>
              <Button className="w-full mt-4" asChild>
                <a href={company.website_url} target="_blank" rel="noopener noreferrer">
                  <Rocket className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};