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

    // Search Reddit for the query with a more detailed User-Agent
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&sort=relevance&t=month&limit=25`,
      {
        headers: {
          // More detailed User-Agent to comply with Reddit's API requirements
          'User-Agent': 'TrendAnalyzer/1.0 (by /u/TrendAnalyzerBot; Market trend analysis tool)',
        },
      }
    );

    if (!response.ok) {
      console.error('Reddit API error:', response.status, await response.text());
      // Return a more graceful fallback response instead of throwing an error
      return new Response(
        JSON.stringify({
          score: 0,
          metadata: {
            error: `Reddit API temporarily unavailable (${response.status})`,
            total_posts: 0,
            top_subreddits: {},
            engagement_metrics: {
              total_comments: 0,
              total_upvotes: 0,
              average_upvote_ratio: 0,
            },
          },
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200, // Return 200 with fallback data instead of 500
        }
      );
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
    const normalizedScore = Math.min(100, Math.round((totalScore / (posts.length || 1)) / 10));

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
    // Return a fallback response instead of an error
    return new Response(
      JSON.stringify({
        score: 0,
        metadata: {
          error: error.message,
          total_posts: 0,
          top_subreddits: {},
          engagement_metrics: {
            total_comments: 0,
            total_upvotes: 0,
            average_upvote_ratio: 0,
          },
        },
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200, // Return 200 with fallback data instead of 500
      }
    );
  }
});