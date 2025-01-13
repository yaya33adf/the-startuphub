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

  // Call HackerNews Trends Edge Function
  const { data: hackerNewsData, error: hackerNewsError } = await supabase.functions.invoke('hackernews-trends', {
    body: { query: searchQuery },
  });

  if (hackerNewsError) throw hackerNewsError;
  console.log('HackerNews Trends data:', hackerNewsData);

  // Call Stack Overflow Trends Edge Function
  const { data: stackOverflowData, error: stackOverflowError } = await supabase.functions.invoke('stackoverflow-trends', {
    body: { query: searchQuery },
  });

  if (stackOverflowError) throw stackOverflowError;
  console.log('Stack Overflow Trends data:', stackOverflowData);

  // Call Wikipedia Trends Edge Function
  const { data: wikipediaData, error: wikipediaError } = await supabase.functions.invoke('wikipedia-trends', {
    body: { query: searchQuery },
  });

  if (wikipediaError) throw wikipediaError;
  console.log('Wikipedia Trends data:', wikipediaData);

  // Call NPM Trends Edge Function
  const { data: npmData, error: npmError } = await supabase.functions.invoke('npm-trends', {
    body: { query: searchQuery },
  });

  if (npmError) throw npmError;
  console.log('NPM Trends data:', npmData);

  // Calculate combined score
  const scores = [
    githubData.score,
    googleData.score,
    redditData.score,
    hackerNewsData.score,
    stackOverflowData.score,
    wikipediaData.score,
    npmData.score
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
      wikipedia_score: wikipediaData.score,
      total_score: avgScore,
      metadata: {
        github: githubData.metadata,
        google_trends: googleData.metadata,
        reddit: redditData.metadata,
        hacker_news: hackerNewsData.metadata,
        stack_overflow: stackOverflowData.metadata,
        wikipedia: wikipediaData.metadata,
        npm: npmData.metadata,
      },
    });

  if (dbError) throw dbError;

  return {
    score: avgScore,
    metadata: {
      github: githubData.metadata,
      google_trends: googleData.metadata,
      reddit: redditData.metadata,
      hacker_news: hackerNewsData.metadata,
      stack_overflow: stackOverflowData.metadata,
      wikipedia: wikipediaData.metadata,
      npm: npmData.metadata,
    },
  };
};