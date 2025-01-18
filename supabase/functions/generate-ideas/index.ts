import "https://deno.land/x/xhr@0.1.0/mod.ts"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

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
    const { keyword } = await req.json()
    console.log('Generating ideas for keyword:', keyword)

    if (!keyword) {
      throw new Error('Keyword is required')
    }

    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a creative business idea generator. Generate 5 unique and innovative business ideas based on the given keyword. Format your response as a JSON array with objects containing 'title' and 'description' properties."
          },
          {
            role: "user",
            content: `Generate 5 innovative business ideas related to: ${keyword}`
          }
        ],
      }),
    })

    const data = await openAIResponse.json()
    console.log('OpenAI response:', data)

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response from OpenAI')
    }

    // Parse the response content as JSON
    const ideas = JSON.parse(data.choices[0].message.content)
    console.log('Parsed ideas:', ideas)

    return new Response(
      JSON.stringify({ ideas }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        } 
      }
    )
  } catch (error) {
    console.error('Error in generate-ideas function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
  }
})