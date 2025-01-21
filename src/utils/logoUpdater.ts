import { supabase } from "@/integrations/supabase/client";

export async function updateLogoMetaTags() {
  try {
    console.log('Fetching site logo...');
    const { data, error } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'site_logo')
      .maybeSingle();

    if (error) {
      console.error('Error fetching logo:', error);
      return;
    }

    if (data?.value && typeof data.value === 'object' && 'url' in data.value) {
      const logoUrl = String(data.value.url);
      document.getElementById('og-image')?.setAttribute('content', logoUrl);
      document.getElementById('twitter-image')?.setAttribute('content', logoUrl);
      console.log('Meta tags updated with new logo URL:', logoUrl);
    }
  } catch (error) {
    console.error('Error in updateLogoMetaTags:', error);
  }
}