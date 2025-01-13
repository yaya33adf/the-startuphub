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
    console.log('Processing NPM trends for query:', query);

    // Search for packages
    const searchResponse = await fetch(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(query)}&size=10`);
    const searchData = await searchResponse.json();
    console.log('NPM search results:', searchData.objects.length, 'packages found');

    let totalScore = 0;
    let metadata = [];

    // Process top packages
    for (const pkg of searchData.objects.slice(0, 5)) {
      const packageName = pkg.package.name;
      
      // Get download counts for the last week
      const statsResponse = await fetch(`https://api.npmjs.org/downloads/point/last-week/${packageName}`);
      const statsData = await statsResponse.json();
      
      // Get package details
      const detailsResponse = await fetch(`https://registry.npmjs.org/${packageName}`);
      const details = await detailsResponse.json();
      
      // Calculate package score based on:
      // - Weekly downloads (up to 50 points)
      // - GitHub stars if available (up to 20 points)
      // - Package quality from npm search (up to 20 points)
      // - Maintenance score from npm search (up to 10 points)
      const downloadScore = Math.min(50, (statsData.downloads / 10000));
      const qualityScore = pkg.score.detail.quality * 20;
      const maintenanceScore = pkg.score.detail.maintenance * 10;
      
      const packageScore = Math.round(downloadScore + qualityScore + maintenanceScore);
      
      metadata.push({
        name: packageName,
        weeklyDownloads: statsData.downloads,
        version: pkg.package.version,
        description: pkg.package.description,
        score: packageScore,
        quality: Math.round(pkg.score.detail.quality * 100),
        maintenance: Math.round(pkg.score.detail.maintenance * 100),
      });
      
      totalScore += packageScore;
    }

    // Calculate final score (0-100)
    const finalScore = Math.round(Math.min(100, totalScore / 5));
    console.log('Final NPM trend score:', finalScore);

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
    console.error('Error in npm-trends function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});