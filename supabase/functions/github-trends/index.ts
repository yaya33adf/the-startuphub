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

    const repoData = await repoResponse.json();
    console.log('GitHub API response received');

    // Calculate GitHub score based on repository metrics
    const score = calculateGitHubScore(repoData);
    console.log('Calculated GitHub score:', score);

    return new Response(
      JSON.stringify({
        score,
        metadata: {
          total_count: repoData.total_count,
          top_repos: repoData.items.slice(0, 5).map((repo: any) => ({
            name: repo.full_name,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url,
          })),
        },
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in github-trends function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
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
  const score = topRepos.reduce((acc: number, repo: any) => {
    const starScore = repo.stargazers_count * 1;
    const forkScore = repo.forks_count * 2;
    const watcherScore = repo.watchers_count * 0.5;
    return acc + starScore + forkScore + watcherScore;
  }, 0);

  // Normalize score to 0-100 range
  return Math.min(Math.round(score / 1000), 100);
}