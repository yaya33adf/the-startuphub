import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { Upload } from "lucide-react";
import { toast } from "sonner";

export const SiteSettings = () => {
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLogoFile(file);
      const fileExt = file.name.split('.').pop();
      const fileName = `site-logo-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('brand_logos')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('brand_logos')
        .getPublicUrl(fileName);

      const { error: settingsError } = await supabase
        .from('site_settings')
        .upsert({
          key: 'site_logo',
          value: { url: publicUrl }
        });

      if (settingsError) throw settingsError;

      toast.success("Logo updated successfully!");
    } catch (error) {
      console.error('Error uploading logo:', error);
      toast.error("Failed to upload logo");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Site Settings</CardTitle>
        <CardDescription>Manage your website appearance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="logo">Site Logo</Label>
            <div className="mt-2">
              <Button
                variant="outline"
                onClick={() => document.getElementById('logo-upload')?.click()}
                className="w-full"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Logo
              </Button>
              <Input
                id="logo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoUpload}
              />
            </div>
            {logoFile && (
              <p className="text-sm text-muted-foreground mt-2">
                Selected: {logoFile.name}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};