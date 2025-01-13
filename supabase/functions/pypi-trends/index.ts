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
      // Get download stats for the last 30 days
      const statsResponse = await fetch(`https://pypistats.org/api/packages/${packageName}/recent`);
      const statsData = await statsResponse.json();
      
      // Get package info from PyPI JSON API
      const infoResponse = await fetch(`https://pypi.org/pypi/${packageName}/json`);
      const packageInfo = await infoResponse.json();
      
      // Calculate package score based on:
      // - Monthly downloads (up to 60 points)
      // - Version count (up to 20 points)
      // - Project maturity (up to 20 points)
      const monthlyDownloads = statsData.data.last_month;
      const downloadScore = Math.min(60, (monthlyDownloads / 10000));
      const versionScore = Math.min(20, Object.keys(packageInfo.releases).length * 2);
      const maturityScore = packageInfo.info.development_status ? 20 : 10;
      
      const packageScore = Math.round(downloadScore + versionScore + maturityScore);
      
      metadata.push({
        name: packageName,
        monthlyDownloads,
        version: packageInfo.info.version,
        description: packageInfo.info.summary,
        score: packageScore,
        releaseCount: Object.keys(packageInfo.releases).length,
        lastRelease: packageInfo.info.version,
      });
      
      totalScore += packageScore;
    }

    // Calculate final score (0-100)
    const finalScore = Math.round(Math.min(100, totalScore / (packageNames.length || 1)));
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
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});