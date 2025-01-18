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

    // Extract video ID from URL
    let videoId;
    try {
      if (url.includes('youtube.com')) {
        videoId = new URL(url).searchParams.get('v');
      } else if (url.includes('youtu.be')) {
        videoId = url.split('/').pop()?.split('?')[0];
      }

      if (!videoId) {
        throw new Error('Could not extract video ID from URL');
      }
      console.log('Extracted video ID:', videoId);
    } catch (error) {
      console.error('Error extracting video ID:', error);
      throw new Error('Invalid YouTube URL format');
    }

    // Set up API request
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
      }
    };

    const apiUrl = `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${videoId}`;
    console.log('Initiating API request to:', apiUrl);

    // Make the API request with timeout
    try {
      const response = await Promise.race([
        fetch(apiUrl, options),
        timeoutPromise
      ]);

      if (!response.ok) {
        console.error('API response not ok:', response.status, response.statusText);
        const responseText = await response.text();
        console.error('API error response:', responseText);

        if (response.status === 401 || response.status === 403) {
          throw new Error('RapidAPI key is invalid or has expired. Please check your API key.');
        } else if (response.status === 429) {
          throw new Error('RapidAPI rate limit exceeded. Please try again later.');
        }
        throw new Error(`API returned ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API response received:', JSON.stringify(data));

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
      );
    } catch (error) {
      console.error('API request failed:', error);
      throw error; // Re-throw to be caught by outer try-catch
    }
  } catch (error) {
    console.error('Error processing request:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to convert video';
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: error instanceof Error ? error.stack : undefined
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 500 
      }
    );
  }
})