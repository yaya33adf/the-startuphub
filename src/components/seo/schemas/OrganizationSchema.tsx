import { FC, useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

export const OrganizationSchema: FC = () => {
  const [logoUrl, setLogoUrl] = useState<string>(`${window.location.origin}/og-image.png`);

  useEffect(() => {
    const fetchSiteLogo = async () => {
      try {
        const { data, error } = await supabase
          .from('site_settings')
          .select('value')
          .eq('key', 'site_logo')
          .single();

        if (error) throw error;
        
        if (data?.value?.url) {
          setLogoUrl(data.value.url);
          console.log('Site logo fetched successfully:', data.value.url);
        }
      } catch (error) {
        console.error('Error fetching site logo:', error);
      }
    };

    fetchSiteLogo();
  }, []);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Startup Hub',
    url: window.location.origin,
    logo: logoUrl,
    description: 'Your comprehensive platform for tracking market trends, exploring opportunities, and discovering side hustles',
    sameAs: [
      'https://twitter.com/startuphub',
      'https://linkedin.com/company/startuphub',
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};