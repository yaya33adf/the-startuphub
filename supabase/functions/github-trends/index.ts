import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GITHUB_TOKEN = Deno.env.get('GITHUB_ACCESS_TOKEN');

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
    console.log('Searching GitHub for:', query);

    // Search repositories
    const repoResponse = await fetch(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc`,
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!repoResponse.ok) {
      throw new Error(`GitHub API returned ${repoResponse.status}`);
    }

    const repoData = await repoResponse.json();
    console.log('GitHub API response received:', repoData);

    // Calculate GitHub score based on repository metrics
    const score = calculateGitHubScore(repoData);
    console.log('Calculated GitHub score:', score);

    return new Response(
      JSON.stringify({
        score,
        metadata: {
          total_count: repoData.total_count,
          top_repos: repoData.items?.slice(0, 5).map((repo: any) => ({
            name: repo.full_name,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url,
          })) || [],
        },
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in github-trends function:', error);
    // Return a valid response with a 0 score instead of throwing
    return new Response(
      JSON.stringify({
        score: 0,
        metadata: {
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

function calculateGitHubScore(data: any): number {
  if (!data.items || data.items.length === 0) {
    return 0;
  }

  // Get top 10 repositories
  const topRepos = data.items.slice(0, 10);
  
  // Calculate score based on stars, forks, and watchers
  let totalScore = 0;
  
  topRepos.forEach((repo: any) => {
    const starScore = Math.min(50, repo.stargazers_count / 100);
    const forkScore = Math.min(30, repo.forks_count / 50);
    const watcherScore = Math.min(20, repo.watchers_count / 30);
    
    totalScore += starScore + forkScore + watcherScore;
  });

  // Normalize score to 0-100 range
  const normalizedScore = Math.min(100, Math.round((totalScore / topRepos.length)));
  return normalizedScore;
}