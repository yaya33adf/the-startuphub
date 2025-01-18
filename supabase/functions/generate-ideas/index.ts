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
            content: "You are a creative business idea generator. Generate exactly 5 unique and innovative business ideas based on the given keyword. Your response must be a valid JSON array of objects, where each object has a 'title' and 'description' property. Example format: [{\"title\": \"Idea 1\", \"description\": \"Description 1\"}, ...]"
          },
          {
            role: "user",
            content: `Generate 5 business ideas related to: ${keyword}`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      }),
    })

    if (!openAIResponse.ok) {
      const errorData = await openAIResponse.text()
      console.error('OpenAI API error:', errorData)
      throw new Error(`OpenAI API error: ${errorData}`)
    }

    const data = await openAIResponse.json()
    console.log('OpenAI response:', JSON.stringify(data))

    if (!data.choices?.[0]?.message?.content) {
      console.error('Invalid OpenAI response structure:', data)
      throw new Error('Invalid response structure from OpenAI')
    }

    let ideas
    try {
      ideas = JSON.parse(data.choices[0].message.content)
      console.log('Successfully parsed ideas:', ideas)
      
      if (!Array.isArray(ideas) || ideas.length === 0) {
        throw new Error('Response is not a valid array of ideas')
      }

      // Validate each idea has the required structure
      ideas.forEach((idea, index) => {
        if (!idea.title || !idea.description) {
          throw new Error(`Idea at index ${index} is missing required fields`)
        }
      })
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError)
      console.error('Raw content:', data.choices[0].message.content)
      throw new Error('Failed to parse OpenAI response as JSON')
    }

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
      JSON.stringify({ 
        error: error.message,
        details: error.stack
      }),
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