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
    console.log('Searching Wikipedia for:', query);

    // First, search for Wikipedia pages matching the query
    const searchResponse = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`
    );
    const searchData = await searchResponse.json();
    console.log('Wikipedia search results:', searchData);

    if (!searchData.query?.search?.length) {
      return new Response(
        JSON.stringify({
          score: 0,
          metadata: { message: 'No Wikipedia pages found' },
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Get pageviews for top 5 results
    const topPages = searchData.query.search.slice(0, 5);
    const metadata: any = {
      topPages: [],
    };

    let totalScore = 0;
    const now = new Date();
    const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
    const startDate = thirtyDaysAgo.toISOString().split('T')[0];
    const endDate = new Date().toISOString().split('T')[0];

    for (const page of topPages) {
      const pageviewsResponse = await fetch(
        `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/${encodeURIComponent(page.title)}/daily/${startDate}/${endDate}`
      );
      const pageviewsData = await pageviewsResponse.json();
      console.log(`Pageviews for ${page.title}:`, pageviewsData);

      // Calculate score based on pageviews and recent edits
      const views = pageviewsData.items?.reduce((sum: number, item: any) => sum + item.views, 0) || 0;
      const recentEdits = page.wordcount || 0;

      // Score calculation:
      // - Views in last 30 days (normalized)
      // - Recent edits weight
      // - Page length/wordcount factor
      const pageScore = (views / 100) + (recentEdits / 1000);
      totalScore += pageScore;

      metadata.topPages.push({
        title: page.title,
        url: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
        views: views,
        wordcount: page.wordcount,
        snippet: page.snippet,
        lastModified: page.timestamp,
      });
    }

    // Normalize final score to 0-100 range
    const normalizedScore = Math.min(100, Math.round((totalScore / 50) * 100));
    console.log('Calculated Wikipedia score:', normalizedScore);

    return new Response(
      JSON.stringify({
        score: normalizedScore,
        metadata,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in wikipedia-trends function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});