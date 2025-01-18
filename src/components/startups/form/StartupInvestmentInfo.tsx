import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StartupInvestmentInfoProps {
  investmentType: string;
  investmentAmount: string;
  onInvestmentTypeChange: (value: string) => void;
  onInvestmentAmountChange: (value: string) => void;
}

export const StartupInvestmentInfo = ({
  investmentType,
  investmentAmount,
  onInvestmentTypeChange,
  onInvestmentAmountChange,
}: StartupInvestmentInfoProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="investmentType" className="block text-sm font-medium text-gray-700 mb-1">
          Investment Type
        </label>
        <Select value={investmentType} onValueChange={onInvestmentTypeChange}>
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
          onChange={(e) => onInvestmentAmountChange(e.target.value)}
          placeholder="Enter amount in USD"
        />
      </div>
    </div>
  );
};