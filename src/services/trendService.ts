import { supabase } from "@/integrations/supabase/client";

export const calculateTrendScores = async (searchQuery: string) => {
  console.log('Starting trend calculation for:', searchQuery);
  
  // First check if we have recent results cached
  const { data: existingScores } = await supabase
    .from('trend_scores')
    .select('*')
    .eq('query', searchQuery)
    .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
    .maybeSingle();

  if (existingScores) {
    console.log('Found cached results:', existingScores);
    return {
      score: existingScores.total_score,
      metadata: existingScores.metadata
    };
  }

  // If no cached results, calculate new scores
  const [
    githubData,
    googleData,
    hackerNewsData,
    stackOverflowData,
    wikipediaData,
    npmData,
    pypiData
  ] = await Promise.all([
    supabase.functions.invoke('github-trends', { body: { query: searchQuery } }),
    supabase.functions.invoke('google-trends', { body: { query: searchQuery } }),
    supabase.functions.invoke('hackernews-trends', { body: { query: searchQuery } }),
    supabase.functions.invoke('stackoverflow-trends', { body: { query: searchQuery } }),
    supabase.functions.invoke('wikipedia-trends', { body: { query: searchQuery } }),
    supabase.functions.invoke('npm-trends', { body: { query: searchQuery } }),
    supabase.functions.invoke('pypi-trends', { body: { query: searchQuery } })
  ]);

  console.log('All API calls completed');

  // Calculate combined score
  const scores = [
    githubData.data.score,
    googleData.data.score,
    hackerNewsData.data.score,
    stackOverflowData.data.score,
    wikipediaData.data.score,
    npmData.data.score,
    pypiData.data.score
  ];
  
  const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

  const metadata = {
    github: githubData.data.metadata,
    google_trends: googleData.data.metadata,
    hacker_news: hackerNewsData.data.metadata,
    stack_overflow: stackOverflowData.data.metadata,
    wikipedia: wikipediaData.data.metadata,
    npm: npmData.data.metadata,
    pypi: pypiData.data.metadata,
  };

  // Store the results in the database
  await supabase
    .from('trend_scores')
    .insert({
      query: searchQuery,
      github_score: githubData.data.score,
      google_trends_score: googleData.data.score,
      wikipedia_score: wikipediaData.data.score,
      total_score: avgScore,
      metadata
    });

  console.log('Results stored in database');

  return {
    score: avgScore,
    metadata
  };
};