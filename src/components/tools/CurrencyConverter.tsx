import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CURRENCIES = {
  USD: "US Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  JPY: "Japanese Yen",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  INR: "Indian Rupee",
  NZD: "New Zealand Dollar",
};

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [result, setResult] = useState<string>("");
  const { toast } = useToast();

  const handleConvert = async () => {
    if (!amount || isNaN(Number(amount))) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid number",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[toCurrency];
      const convertedAmount = (Number(amount) * rate).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch exchange rates",
        variant: "destructive",
      });
    }
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Currency Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger>
              <SelectValue placeholder="From" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(CURRENCIES).map(([code, name]) => (
                <SelectItem key={code} value={code}>
                  {code} - {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            onClick={handleSwapCurrencies}
            className="p-2 hover:bg-accent rounded-md"
          >
            <ArrowRightLeft className="h-4 w-4" />
          </button>
          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger>
              <SelectValue placeholder="To" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(CURRENCIES).map(([code, name]) => (
                <SelectItem key={code} value={code}>
                  {code} - {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <button
          onClick={handleConvert}
          className="w-full bg-primary text-primary-foreground h-10 px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Convert
        </button>
        {result && (
          <div className="mt-4 p-4 bg-accent rounded-md text-center font-medium">
            {result}
          </div>
        )}
      </CardContent>
    </Card>
  );
};