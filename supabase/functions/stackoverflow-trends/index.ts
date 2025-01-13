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
    console.log('Searching Stack Overflow for:', query);

    try {
      // Search Stack Overflow questions with timeout and retry
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      const searchResponse = await fetch(
        `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${encodeURIComponent(query)}&site=stackoverflow&filter=withbody`,
        { signal: controller.signal }
      );
      clearTimeout(timeout);

      if (!searchResponse.ok) {
        throw new Error(`Stack Overflow API returned ${searchResponse.status}`);
      }

      const searchData = await searchResponse.json();
      console.log('Stack Overflow search results:', searchData);

      // Calculate score based on views, score, and answer count
      let totalScore = 0;
      const questions = searchData.items?.slice(0, 10) || []; // Consider top 10 questions
      const metadata: any = {
        topQuestions: [],
      };

      questions.forEach((question: any) => {
        // Base score from views, score, and answer_count
        const views = question.view_count || 0;
        const score = question.score || 0;
        const answers = question.answer_count || 0;
        
        // Recency boost (questions from last 30 days get higher weight)
        const questionDate = new Date(question.creation_date * 1000);
        const now = new Date();
        const daysDiff = (now.getTime() - questionDate.getTime()) / (1000 * 60 * 60 * 24);
        const recencyBoost = daysDiff <= 30 ? 1.5 : 1;

        // Calculate question score
        const questionScore = ((views / 100) + (score * 10) + (answers * 5)) * recencyBoost;
        totalScore += questionScore;

        // Add to metadata
        metadata.topQuestions.push({
          title: question.title,
          link: question.link,
          score: question.score,
          views: question.view_count,
          answers: question.answer_count,
          date: new Date(question.creation_date * 1000).toISOString(),
        });
      });

      // Normalize score to 0-100 range
      const normalizedScore = Math.min(100, Math.round((totalScore / 1000) * 100));
      console.log('Calculated Stack Overflow score:', normalizedScore);

      return new Response(
        JSON.stringify({
          score: normalizedScore,
          metadata,
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    } catch (apiError) {
      console.error('Stack Overflow API error:', apiError);
      // Return a valid response with a 0 score instead of throwing
      return new Response(
        JSON.stringify({
          score: 0,
          metadata: {
            topQuestions: [],
            error: apiError.message,
            timestamp: new Date().toISOString()
          },
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error) {
    console.error('Error in stackoverflow-trends function:', error);
    // Return a valid response with a 0 score for any other errors
    return new Response(
      JSON.stringify({
        score: 0,
        metadata: {
          topQuestions: [],
          error: error.message,
          timestamp: new Date().toISOString()
        },
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});