import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import type { Json } from "@/integrations/supabase/types";

interface SiteLogoValue {
  url: string;
}

interface SiteSettingsPayload {
  value: Json;
}

const isValidLogoValue = (value: unknown): value is SiteLogoValue => {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    'url' in value &&
    typeof (value as Record<string, unknown>).url === 'string'
  );
};

export const useLogoSubscription = () => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchSiteLogo = async () => {
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

        if (data?.value && isValidLogoValue(data.value)) {
          console.log('Logo URL updated:', data.value.url);
          setLogoUrl(data.value.url);
        }
      } catch (error) {
        console.error('Error in fetchSiteLogo:', error);
      }
    };

    fetchSiteLogo();

    const channel = supabase
      .channel('site_settings_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'site_settings',
          filter: 'key=eq.site_logo'
        },
        (payload: RealtimePostgresChangesPayload<SiteSettingsPayload>) => {
          console.log('Logo settings changed, payload:', payload);
          if (payload.new && 'value' in payload.new && isValidLogoValue(payload.new.value)) {
            console.log('Setting new logo URL:', payload.new.value.url);
            setLogoUrl(payload.new.value.url);
          }
        }
      )
      .subscribe();

    return () => {
      console.log('Cleaning up logo subscription');
      supabase.removeChannel(channel);
    };
  }, []);

  return logoUrl;
};