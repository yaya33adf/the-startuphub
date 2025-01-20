import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Logo = memo(() => {
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

        if (data?.value && typeof data.value === 'object') {
          const value = data.value as { url: string };
          if ('url' in value) {
            console.log('Logo URL updated:', value.url);
            setLogoUrl(value.url);
          }
        }
      } catch (error) {
        console.error('Error in fetchSiteLogo:', error);
      }
    };

    // Fetch logo initially
    fetchSiteLogo();

    // Set up real-time subscription for logo updates
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
        (payload) => {
          console.log('Logo settings changed, payload:', payload);
          if (payload.new && typeof payload.new.value === 'object') {
            const newValue = payload.new.value as { url: string };
            if ('url' in newValue) {
              console.log('Setting new logo URL:', newValue.url);
              setLogoUrl(newValue.url);
            }
          }
        }
      )
      .subscribe();

    return () => {
      console.log('Cleaning up logo subscription');
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 transition-all duration-200 hover:opacity-80 hover:scale-105 flex-shrink-0"
    >
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt="Site Logo" 
          className="w-8 h-8 rounded-lg object-contain"
          onError={(e) => {
            console.error('Error loading logo image');
            e.currentTarget.src = ''; // Clear the src to show fallback
            setLogoUrl(null); // Reset to fallback icon
          }}
        />
      ) : (
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] shadow-lg">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
      )}
      <span className="font-bold text-xl bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] bg-clip-text text-transparent">
        Startup Hub
      </span>
    </Link>
  );
});

Logo.displayName = "Logo";