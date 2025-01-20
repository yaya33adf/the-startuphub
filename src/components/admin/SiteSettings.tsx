import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { LogoUploader } from "./LogoUploader";
import type { LogoFile } from "./types/siteSettings";

export const SiteSettings = () => {
  const [logoFile, setLogoFile] = useState<LogoFile>({
    file: null,
    previewUrl: null
  });
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

        if (data?.value && typeof data.value === 'object' && 'url' in data.value) {
          const value = data.value as { url: string };
          console.log('Current logo URL:', value.url);
          setLogoFile(prev => ({ ...prev, previewUrl: value.url }));
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

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }

    // Validate file size (e.g., 2MB limit)
    const MAX_SIZE = 2 * 1024 * 1024; // 2MB
    if (file.size > MAX_SIZE) {
      toast.error("File is too large. Maximum size is 2MB");
      return;
    }

    try {
      setIsUploading(true);
      setLogoFile({
        file,
        previewUrl: URL.createObjectURL(file)
      });

      const fileExt = file.name.split('.').pop();
      const fileName = `site-logo-${Date.now()}.${fileExt}`;

      // Upload to storage
      const { error: uploadError, data } = await supabase.storage
        .from('brand_logos')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

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
      
      // Update preview URL to the permanent URL
      setLogoFile(prev => ({ ...prev, previewUrl: publicUrl }));
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
          <LogoUploader 
            logoFile={logoFile}
            isUploading={isUploading}
            onLogoUpload={handleLogoUpload}
          />
        </div>
      </CardContent>
    </Card>
  );
};