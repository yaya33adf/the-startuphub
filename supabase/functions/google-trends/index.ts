import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'
import googleTrends from 'npm:google-trends-api@4.9.2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { query } = await req.json()
    console.log('Searching Google Trends for:', query)

    // Get interest over time
    const interestOverTime = await googleTrends.interestOverTime({
      keyword: query,
      startTime: new Date(Date.now() - (30 * 24 * 60 * 60 * 1000)), // Last 30 days
    })

    const data = JSON.parse(interestOverTime)
    console.log('Google Trends data received')

    // Calculate trend score based on interest over time
    const timelineData = data.default.timelineData
    const score = calculateGoogleTrendsScore(timelineData)
    console.log('Calculated Google Trends score:', score)

    return new Response(
      JSON.stringify({
        score,
        metadata: {
          timeline: timelineData,
          averageValue: score,
        },
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in google-trends function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})

function calculateGoogleTrendsScore(timelineData: any[]): number {
  if (!timelineData || timelineData.length === 0) {
    return 0
  }

  // Calculate average interest over time
  const sum = timelineData.reduce((acc, point) => acc + point.value[0], 0)
  const average = sum / timelineData.length

  // Normalize to 0-100 range (Google Trends data is already 0-100)
  return Math.round(average)
}