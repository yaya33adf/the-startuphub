import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const TIMEOUT_DURATION = 120000; // 2 minutes timeout for longer videos

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
      setTimeout(() => reject(new Error('Conversion timeout - video may be too long')), TIMEOUT_DURATION)
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

    if (!response.ok) {
      console.error('API response not ok:', response.status, response.statusText);
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }

    const data = await response.json()
    console.log('Conversion API response:', data)

    if (!data || data.status === 'fail' || !data.link) {
      console.error('Invalid API response:', data);
      throw new Error(data.msg || 'Invalid response from conversion service');
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
    const errorMessage = error.message || 'Failed to convert video. Please try a shorter video or try again later.';
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: error.stack 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 500 
      }
    )
  }
})