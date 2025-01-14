import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, Crown, Star, Heart, Upload } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const BrandIdentityTool = () => {
  const [brandName, setBrandName] = useState("");
  const [tagline, setTagline] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [fontFamily, setFontFamily] = useState("Inter");
  const [isUploading, setIsUploading] = useState(false);

  const icons = [
    { name: "Shield", component: Shield },
    { name: "Crown", component: Crown },
    { name: "Star", component: Star },
    { name: "Heart", component: Heart },
  ];

  const fonts = [
    { name: "Inter", value: "Inter" },
    { name: "Arial", value: "Arial" },
    { name: "Helvetica", value: "Helvetica" },
    { name: "Times New Roman", value: "Times New Roman" },
    { name: "Georgia", value: "Georgia" },
  ];

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadLogo = async () => {
    if (!logoFile) return null;
    
    const fileExt = logoFile.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('brand_logos')
      .upload(fileName, logoFile);

    if (error) {
      console.error('Error uploading logo:', error);
      throw error;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('brand_logos')
      .getPublicUrl(fileName);

    return publicUrl;
  };

  const handleSave = async () => {
    if (!brandName.trim()) {
      toast.error("Please enter a brand name");
      return;
    }

    setIsUploading(true);
    try {
      let logoUrl = null;
      if (logoFile) {
        logoUrl = await uploadLogo();
      }

      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Please sign in to save your brand identity");
        return;
      }

      const { error } = await supabase
        .from('brand_identities')
        .insert({
          user_id: user.id,
          brand_name: brandName,
          tagline,
          logo_url: logoUrl,
          primary_color: primaryColor,
          font_family: fontFamily,
        });

      if (error) throw error;
      
      toast.success("Brand identity saved successfully!");
      
      console.log({
        brandName,
        tagline,
        selectedIcon,
        primaryColor,
        fontFamily,
        logoUrl,
      });
    } catch (error) {
      console.error('Error saving brand identity:', error);
      toast.error("Failed to save brand identity");
    } finally {
      setIsUploading(false);
    }
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
          <Label>Brand Logo</Label>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => document.getElementById('logo-upload')?.click()}
                className="w-full"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Logo
              </Button>
              <Input
                id="logo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoChange}
              />
            </div>
            {logoPreview && (
              <div className="relative w-32 h-32">
                <img
                  src={logoPreview}
                  alt="Logo preview"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            {!logoPreview && (
              <div className="space-y-2">
                <Label>Or choose an icon</Label>
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
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fontFamily">Font Family</Label>
          <select
            id="fontFamily"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {fonts.map((font) => (
              <option key={font.value} value={font.value}>
                {font.name}
              </option>
            ))}
          </select>
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

        <Button 
          onClick={handleSave} 
          className="w-full"
          disabled={isUploading}
        >
          {isUploading ? "Saving..." : "Save Brand Identity"}
        </Button>
      </CardContent>
    </Card>
  );
};