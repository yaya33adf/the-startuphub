import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const TIMEOUT_DURATION = 30000; // 30 seconds timeout

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { url } = await req.json()
    
    if (!url || (!url.includes('youtube.com') && !url.includes('youtu.be'))) {
      return new Response(
        JSON.stringify({ error: 'Invalid YouTube URL' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    console.log('Processing YouTube URL:', url)

    const rapidApiKey = Deno.env.get('RAPID_API_KEY')
    if (!rapidApiKey) {
      throw new Error('RAPID_API_KEY is not configured')
    }

    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Conversion timed out. Please try again.')), TIMEOUT_DURATION)
    });

    // API call with better options
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
      }
    }

    const apiUrl = `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${encodeURIComponent(url)}`
    console.log('Calling conversion API:', apiUrl)

    // Race between the API call and timeout
    const response = await Promise.race([
      fetch(apiUrl, options),
      timeoutPromise
    ]);

    const data = await response.json()
    console.log('Conversion API response:', data)

    if (!response.ok || data.status === 'fail') {
      throw new Error(data.msg || 'Failed to convert video')
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Conversion completed',
        downloadUrl: data.link,
        title: data.title
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error processing request:', error)
    const errorMessage = error.message === 'Conversion timed out. Please try again.'
      ? error.message
      : 'Failed to convert video. Please try a different video or try again later.';
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})