import { supabase } from "@/integrations/supabase/client";
import type { TrendData } from "@/types/trends";

export const calculateTrendScores = async (searchQuery: string, country: string = 'worldwide', timeframe: string = '7d'): Promise<TrendData> => {
  console.log('Starting trend calculation for:', { searchQuery, country, timeframe });
  
  // First check if we have recent results cached
  const { data: existingScores } = await supabase
    .from('trend_scores')
    .select('*')
    .eq('query', searchQuery)
    .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
    .maybeSingle();

  if (existingScores?.metadata && typeof existingScores.metadata === 'object') {
    console.log('Found cached results:', existingScores);
    return {
      score: existingScores.total_score || 0,
      metadata: existingScores.metadata as TrendData['metadata']
    };
  }

  console.log('No cached results found, calculating new scores...');

  try {
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
      supabase.functions.invoke('google-trends', { 
        body: { 
          query: searchQuery,
          country: country,
          timeframe: timeframe
        } 
      }),
      supabase.functions.invoke('hackernews-trends', { body: { query: searchQuery } }),
      supabase.functions.invoke('stackoverflow-trends', { body: { query: searchQuery } }),
      supabase.functions.invoke('wikipedia-trends', { body: { query: searchQuery } }),
      supabase.functions.invoke('npm-trends', { body: { query: searchQuery } }),
      supabase.functions.invoke('pypi-trends', { body: { query: searchQuery } })
    ]);

    console.log('API responses:', {
      github: githubData,
      google: googleData,
      hackerNews: hackerNewsData,
      stackOverflow: stackOverflowData,
      wikipedia: wikipediaData,
      npm: npmData,
      pypi: pypiData
    });

    const metadata: TrendData['metadata'] = {
      github: {
        score: githubData.data?.score || 0,
        metadata: githubData.data?.metadata
      },
      google_trends: {
        score: googleData.data?.score || 0,
        metadata: googleData.data?.metadata
      },
      hacker_news: {
        score: hackerNewsData.data?.score || 0,
        metadata: hackerNewsData.data?.metadata
      },
      stack_overflow: {
        score: stackOverflowData.data?.score || 0,
        metadata: stackOverflowData.data?.metadata
      },
      wikipedia: {
        score: wikipediaData.data?.score || 0,
        metadata: wikipediaData.data?.metadata
      },
      npm: {
        score: npmData.data?.score || 0,
        metadata: npmData.data?.metadata
      },
      pypi: {
        score: pypiData.data?.score || 0,
        metadata: pypiData.data?.metadata
      }
    };

    // Calculate combined score
    const scores = [
      githubData.data?.score || 0,
      googleData.data?.score || 0,
      hackerNewsData.data?.score || 0,
      stackOverflowData.data?.score || 0,
      wikipediaData.data?.score || 0,
      npmData.data?.score || 0,
      pypiData.data?.score || 0
    ];
    
    const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

    // Store the results
    const { error: insertError } = await supabase
      .from('trend_scores')
      .insert({
        query: searchQuery,
        github_score: githubData.data?.score || 0,
        google_trends_score: googleData.data?.score || 0,
        wikipedia_score: wikipediaData.data?.score || 0,
        total_score: avgScore,
        metadata
      });

    if (insertError) {
      console.error('Error storing trend scores:', insertError);
    }

    return {
      score: avgScore,
      metadata
    };
  } catch (error) {
    console.error('Error in trend calculation:', error);
    throw error;
  }
};