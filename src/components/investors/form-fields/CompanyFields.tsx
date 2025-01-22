import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Building2 } from "lucide-react";

interface CompanyFieldsProps {
  country: string;
  company: string;
  investmentStage: string;
  onCountryChange: (value: string) => void;
  onCompanyChange: (value: string) => void;
  onInvestmentStageChange: (value: string) => void;
}

export function CompanyFields({
  country,
  company,
  investmentStage,
  onCountryChange,
  onCompanyChange,
  onInvestmentStageChange,
}: CompanyFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="country">
          <Globe className="h-4 w-4 inline mr-2" />
          Country
        </Label>
        <Input
          id="country"
          value={country}
          onChange={(e) => onCountryChange(e.target.value)}
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
          onChange={(e) => onCompanyChange(e.target.value)}
          placeholder="Enter company name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="investmentStage">Investment Stage</Label>
        <Select value={investmentStage} onValueChange={onInvestmentStageChange}>
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
    </>
  );
}