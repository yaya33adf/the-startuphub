import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, Crown, Star, Heart } from "lucide-react";
import { toast } from "sonner";

export const BrandIdentityTool = () => {
  const [brandName, setBrandName] = useState("");
  const [tagline, setTagline] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [primaryColor, setPrimaryColor] = useState("#000000");

  const icons = [
    { name: "Shield", component: Shield },
    { name: "Crown", component: Crown },
    { name: "Star", component: Star },
    { name: "Heart", component: Heart },
  ];

  const handleSave = () => {
    if (!brandName.trim()) {
      toast.error("Please enter a brand name");
      return;
    }
    
    // Here you could save the brand identity to a database
    toast.success("Brand identity saved successfully!");
    
    console.log({
      brandName,
      tagline,
      selectedIcon,
      primaryColor,
    });
  };

  return (
    <Card className="w-full">
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="brandName">Brand Name</Label>
          <Input
            id="brandName"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Enter your brand name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tagline">Tagline</Label>
          <Input
            id="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            placeholder="Enter your brand tagline"
          />
        </div>

        <div className="space-y-2">
          <Label>Brand Icon</Label>
          <div className="flex gap-4 flex-wrap">
            {icons.map(({ name, component: Icon }) => (
              <Button
                key={name}
                variant={selectedIcon === name ? "default" : "outline"}
                className="h-12 w-12 p-2"
                onClick={() => setSelectedIcon(name)}
              >
                <Icon className="h-6 w-6" />
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="primaryColor">Primary Color</Label>
          <div className="flex gap-4">
            <Input
              id="primaryColor"
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-20 h-10 p-1"
            />
            <div 
              className="flex-1 rounded-md border"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          Save Brand Identity
        </Button>
      </CardContent>
    </Card>
  );
};