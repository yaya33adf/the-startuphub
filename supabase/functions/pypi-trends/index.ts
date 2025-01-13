import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    console.log('Processing PyPI trends for query:', query);

    // Search for packages using PyPI simple API
    const searchResponse = await fetch(`https://pypi.org/simple/`);
    const searchText = await searchResponse.text();
    
    // Parse the HTML response to get package names
    const packageNames = searchText.match(new RegExp(`>[^<]*${query}[^<]*<`, 'gi'))
      ?.map(match => match.slice(1, -1))
      ?.slice(0, 5) || [];

    console.log('Found matching packages:', packageNames);

    let totalScore = 0;
    let metadata = [];

    // Process each package
    for (const packageName of packageNames) {
      try {
        // Get package info from PyPI JSON API first
        const infoResponse = await fetch(`https://pypi.org/pypi/${packageName}/json`);
        if (!infoResponse.ok) {
          console.error(`Failed to fetch package info for ${packageName}`);
          continue;
        }
        const packageInfo = await infoResponse.json();

        // Try to get download stats, with fallback values
        let monthlyDownloads = 0;
        try {
          const statsResponse = await fetch(`https://pypistats.org/api/packages/${packageName}/recent`);
          if (statsResponse.ok) {
            const statsData = await statsResponse.json();
            monthlyDownloads = statsData?.data?.last_month || 0;
          }
        } catch (statsError) {
          console.error(`Failed to fetch download stats for ${packageName}:`, statsError);
        }
        
        // Calculate package score based on available data:
        // - Monthly downloads (up to 60 points)
        // - Version count (up to 20 points)
        // - Project maturity (up to 20 points)
        const downloadScore = Math.min(60, (monthlyDownloads / 10000));
        const versionScore = Math.min(20, Object.keys(packageInfo.releases || {}).length * 2);
        const maturityScore = packageInfo.info?.development_status ? 20 : 10;
        
        const packageScore = Math.round(downloadScore + versionScore + maturityScore);
        
        metadata.push({
          name: packageName,
          monthlyDownloads,
          version: packageInfo.info?.version || 'unknown',
          description: packageInfo.info?.summary || '',
          score: packageScore,
          releaseCount: Object.keys(packageInfo.releases || {}).length,
          lastRelease: packageInfo.info?.version || 'unknown',
        });
        
        totalScore += packageScore;
      } catch (packageError) {
        console.error(`Error processing package ${packageName}:`, packageError);
        continue;
      }
    }

    // Calculate final score (0-100)
    const finalScore = packageNames.length ? Math.round(Math.min(100, totalScore / packageNames.length)) : 0;
    console.log('Final PyPI trend score:', finalScore);

    return new Response(
      JSON.stringify({
        score: finalScore,
        metadata: {
          packages: metadata,
          query,
          timestamp: new Date().toISOString(),
        },
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in pypi-trends function:', error);
    // Return a valid response with a 0 score instead of throwing
    return new Response(
      JSON.stringify({
        score: 0,
        metadata: {
          packages: [],
          query: '',
          timestamp: new Date().toISOString(),
          error: error.message
        },
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});