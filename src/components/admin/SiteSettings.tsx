import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { Upload } from "lucide-react";
import { toast } from "sonner";

export const SiteSettings = () => {
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const fetchCurrentLogo = async () => {
      try {
        const { data, error } = await supabase
          .from('site_settings')
          .select('value')
          .eq('key', 'site_logo')
          .maybeSingle();

        if (error) {
          console.error('Error fetching current logo:', error);
          return;
        }

        if (data?.value && typeof data.value === 'object') {
          const value = data.value as { url: string };
          if ('url' in value) {
            console.log('Current logo URL:', value.url);
            setPreviewUrl(value.url);
          }
        }
      } catch (error) {
        console.error('Error in fetchCurrentLogo:', error);
      }
    };

    fetchCurrentLogo();
  }, []);

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setLogoFile(file);
      
      // Create a preview URL
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      const fileExt = file.name.split('.').pop();
      const fileName = `site-logo-${Date.now()}.${fileExt}`;

      // Upload to storage
      const { error: uploadError, data } = await supabase.storage
        .from('brand_logos')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('brand_logos')
        .getPublicUrl(fileName);

      // Update site settings
      const { error: settingsError } = await supabase
        .from('site_settings')
        .upsert({
          key: 'site_logo',
          value: { url: publicUrl }
        });

      if (settingsError) throw settingsError;

      toast.success("Logo updated successfully!");
      console.log('Logo updated successfully:', publicUrl);
      
      // Clean up the preview URL
      URL.revokeObjectURL(objectUrl);
      setPreviewUrl(publicUrl);
    } catch (error) {
      console.error('Error uploading logo:', error);
      toast.error("Failed to upload logo");
    } finally {
      setIsUploading(false);
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
            <div className="mt-2 space-y-4">
              {previewUrl && (
                <div className="w-20 h-20 rounded-lg border overflow-hidden">
                  <img 
                    src={previewUrl} 
                    alt="Current logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <Button
                variant="outline"
                onClick={() => document.getElementById('logo-upload')?.click()}
                className="w-full"
                disabled={isUploading}
              >
                <Upload className="mr-2 h-4 w-4" />
                {isUploading ? 'Uploading...' : 'Upload Logo'}
              </Button>
              <Input
                id="logo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoUpload}
                disabled={isUploading}
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