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
    console.log('Searching HackerNews for:', query);

    // Search HackerNews stories
    const searchResponse = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story`
    );
    const searchData = await searchResponse.json();
    console.log('HackerNews search results:', searchData);

    // Calculate score based on points, comments, and recency
    let totalScore = 0;
    const stories = searchData.hits.slice(0, 10); // Consider top 10 stories
    const metadata: any = {
      topStories: [],
    };

    stories.forEach((story: any) => {
      // Base score from points and num_comments
      const points = story.points || 0;
      const comments = story.num_comments || 0;
      
      // Recency boost (stories from last 7 days get higher weight)
      const storyDate = new Date(story.created_at);
      const now = new Date();
      const daysDiff = (now.getTime() - storyDate.getTime()) / (1000 * 60 * 60 * 24);
      const recencyBoost = daysDiff <= 7 ? 1.5 : 1;

      // Calculate story score
      const storyScore = (points + comments * 2) * recencyBoost;
      totalScore += storyScore;

      // Add to metadata
      metadata.topStories.push({
        title: story.title,
        url: story.url,
        points: story.points,
        comments: story.num_comments,
        date: story.created_at,
      });
    });

    // Normalize score to 0-100 range
    const normalizedScore = Math.min(100, Math.round((totalScore / 1000) * 100));
    console.log('Calculated HackerNews score:', normalizedScore);

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
    console.error('Error in hackernews-trends function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});