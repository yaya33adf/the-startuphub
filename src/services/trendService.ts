import { supabase } from "@/integrations/supabase/client";

export const calculateTrendScores = async (searchQuery: string) => {
  // Call GitHub Trends Edge Function
  const { data: githubData, error: githubError } = await supabase.functions.invoke('github-trends', {
    body: { query: searchQuery },
  });

  if (githubError) throw githubError;
  console.log('GitHub Trends data:', githubData);

  // Call Google Trends Edge Function
  const { data: googleData, error: googleError } = await supabase.functions.invoke('google-trends', {
    body: { query: searchQuery },
  });

  if (googleError) throw googleError;
  console.log('Google Trends data:', googleData);

  // Call Reddit Trends Edge Function
  const { data: redditData, error: redditError } = await supabase.functions.invoke('reddit-trends', {
    body: { query: searchQuery },
  });

  if (redditError) throw redditError;
  console.log('Reddit Trends data:', redditData);

  // Calculate combined score
  const scores = [
    githubData.score,
    googleData.score,
    redditData.score
  ];
  const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

  // Store the trend scores in Supabase
  const { error: dbError } = await supabase
    .from('trend_scores')
    .insert({
      query: searchQuery,
      github_score: githubData.score,
      google_trends_score: googleData.score,
      reddit_score: redditData.score,
      total_score: avgScore,
      metadata: {
        github: githubData.metadata,
        google_trends: googleData.metadata,
        reddit: redditData.metadata,
      },
    });

  if (dbError) throw dbError;

  return {
    score: avgScore,
    metadata: {
      github: githubData.metadata,
      google_trends: googleData.metadata,
      reddit: redditData.metadata,
    },
  };
};