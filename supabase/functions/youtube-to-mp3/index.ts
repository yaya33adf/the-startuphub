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
      console.error('RAPID_API_KEY is not configured')
      throw new Error('RAPID_API_KEY is not configured in environment')
    }

    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Conversion timeout - video may be too long')), TIMEOUT_DURATION)
    });

    // API call with better options and proper headers
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
      }
    }

    const apiUrl = `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${encodeURIComponent(url)}`
    console.log('Calling conversion API...')

    // Race between the API call and timeout
    const response = await Promise.race([
      fetch(apiUrl, options),
      timeoutPromise
    ]);

    if (!response.ok) {
      console.error('API response not ok:', response.status, response.statusText)
      const responseText = await response.text()
      console.error('API response body:', responseText)
      
      if (response.status === 403) {
        throw new Error('API authentication failed. Please verify the API key is valid and has sufficient credits.')
      }
      throw new Error(`API returned ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Conversion API response received')

    if (!data || data.status === 'fail' || !data.link) {
      console.error('Invalid API response:', data)
      throw new Error(data.msg || 'Invalid response from conversion service')
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
    const errorMessage = error instanceof Error ? error.message : 'Failed to convert video. Please try again later.'
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: error instanceof Error ? error.stack : undefined
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 500 
      }
    )
  }
})