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
    console.log('Searching Reddit for:', query);

    // Search Reddit for the query
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&sort=relevance&t=month&limit=25`,
      {
        headers: {
          'User-Agent': 'TrendAnalyzer/1.0',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Reddit API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Reddit API response received');

    // Calculate trend score based on various metrics
    let totalScore = 0;
    const posts = data.data.children;
    const metadata = {
      total_posts: posts.length,
      top_subreddits: {},
      engagement_metrics: {
        total_comments: 0,
        total_upvotes: 0,
        average_upvote_ratio: 0,
      },
    };

    posts.forEach((post: any) => {
      const postData = post.data;
      
      // Track subreddit frequency
      metadata.top_subreddits[postData.subreddit] = 
        (metadata.top_subreddits[postData.subreddit] || 0) + 1;

      // Accumulate engagement metrics
      metadata.engagement_metrics.total_comments += postData.num_comments;
      metadata.engagement_metrics.total_upvotes += postData.ups;
      metadata.engagement_metrics.average_upvote_ratio += postData.upvote_ratio;

      // Calculate post score
      const postScore = 
        (postData.ups * 0.4) + 
        (postData.num_comments * 0.4) + 
        (postData.upvote_ratio * 20);
      
      totalScore += postScore;
    });

    // Normalize metrics
    if (posts.length > 0) {
      metadata.engagement_metrics.average_upvote_ratio /= posts.length;
    }

    // Normalize final score to 0-100 range
    const normalizedScore = Math.min(100, Math.round((totalScore / posts.length) / 10));

    console.log('Calculated Reddit trend score:', normalizedScore);

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
    console.error('Error in reddit-trends function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});