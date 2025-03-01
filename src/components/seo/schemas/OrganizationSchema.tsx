import { FC, useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface SiteLogoValue {
  url: string;
}

export const OrganizationSchema: FC = () => {
  const [logoUrl, setLogoUrl] = useState<string>(`${window.location.origin}/og-image.png`);

  useEffect(() => {
    const fetchSiteLogo = async () => {
      try {
        const { data, error } = await supabase
          .from('site_settings')
          .select('value')
          .eq('key', 'site_logo')
          .maybeSingle();

        if (error) {
          console.error('Error fetching site logo:', error);
          return;
        }
        
        if (data?.value && typeof data.value === 'object') {
          const value = data.value as unknown as SiteLogoValue;
          if ('url' in value) {
            setLogoUrl(value.url);
            console.log('Site logo fetched successfully:', value.url);
          }
        }
      } catch (error) {
        console.error('Error fetching site logo:', error);
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
        () => {
          console.log('Logo settings changed, refetching...');
          fetchSiteLogo();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Startup Hub',
    url: window.location.origin,
    logo: logoUrl,
    description: 'Premier platform connecting innovative startups with visionary investors. Discover investment opportunities, track market trends, and grow your business.',
    sameAs: [
      'https://twitter.com/startuphub',
      'https://linkedin.com/company/startuphub',
    ],
    knowsAbout: [
      'Startup Investment',
      'Venture Capital',
      'Business Development',
      'Market Analysis',
      'Investment Opportunities',
      'Business Growth',
      'Startup Ecosystem'
    ],
    areaServed: 'Worldwide',
    foundingDate: '2024',
    slogan: 'Connecting Innovative Startups with Visionary Investors'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};