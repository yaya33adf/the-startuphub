import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Copy, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const { toast } = useToast();

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = lowercase;
    if (includeUppercase) chars += uppercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      toast({
        title: "Copied!",
        description: "Password copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <Input
            value={password}
            readOnly
            className="font-mono"
            placeholder="Generated password will appear here"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={copyToClipboard}
            disabled={!password}
            className="flex-shrink-0"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={generatePassword}
            className="flex-shrink-0"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="length">Length: {length}</Label>
            <Input
              id="length"
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="uppercase"
                checked={includeUppercase}
                onCheckedChange={(checked) => setIncludeUppercase(!!checked)}
              />
              <Label htmlFor="uppercase">Include Uppercase Letters</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="numbers"
                checked={includeNumbers}
                onCheckedChange={(checked) => setIncludeNumbers(!!checked)}
              />
              <Label htmlFor="numbers">Include Numbers</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="symbols"
                checked={includeSymbols}
                onCheckedChange={(checked) => setIncludeSymbols(!!checked)}
              />
              <Label htmlFor="symbols">Include Symbols</Label>
            </div>
          </div>
        </div>

        <Button onClick={generatePassword} className="w-full">
          <Shield className="w-4 h-4 mr-2" />
          Generate Password
        </Button>
      </div>
    </div>
  );
};