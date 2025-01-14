import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { keyword } = await req.json();
    console.log('Received keyword:', keyword);

    if (!openAIApiKey) {
      throw new Error('OpenAI API key is not configured');
    }

    if (!keyword) {
      throw new Error('Keyword is required');
    }

    console.log('Making request to OpenAI API...');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Generate exactly 5 startup ideas based on the keyword. Return ONLY a JSON array containing exactly 5 objects. Each object must have exactly these 3 properties:
            1. "name": a short, catchy business name
            2. "description": 2-3 sentences explaining the idea
            3. "market": the target market or industry
            
            Example format:
            [
              {
                "name": "EcoTrack",
                "description": "A mobile app that helps users track and reduce their carbon footprint through daily activities.",
                "market": "Environmental Technology"
              }
            ]`
          },
          {
            role: 'user',
            content: `Generate 5 startup ideas related to: ${keyword}`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error response:', errorText);
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('OpenAI API response structure:', JSON.stringify(data, null, 2));

    if (!data.choices?.[0]?.message?.content) {
      console.error('Invalid OpenAI API response structure:', data);
      throw new Error('Invalid response structure from OpenAI API');
    }

    const content = data.choices[0].message.content.trim();
    console.log('Raw content from OpenAI:', content);

    try {
      const parsedIdeas = JSON.parse(content);
      
      if (!Array.isArray(parsedIdeas)) {
        console.error('Parsed content is not an array:', parsedIdeas);
        throw new Error('Generated content is not an array');
      }

      if (parsedIdeas.length !== 5) {
        console.error('Wrong number of ideas generated:', parsedIdeas.length);
        throw new Error('Expected exactly 5 ideas');
      }

      const validatedIdeas = parsedIdeas.map((idea, index) => {
        if (!idea.name || !idea.description || !idea.market) {
          console.error(`Invalid idea structure at index ${index}:`, idea);
          throw new Error(`Invalid idea structure at index ${index}`);
        }
        return {
          name: String(idea.name),
          description: String(idea.description),
          market: String(idea.market)
        };
      });

      console.log('Successfully validated ideas:', validatedIdeas);
      
      return new Response(JSON.stringify({ ideas: validatedIdeas }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
      console.error('Raw content that failed to parse:', content);
      throw new Error('Failed to parse generated ideas');
    }
  } catch (error) {
    console.error('Error in generate-startup-ideas function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      details: error instanceof Error ? error.stack : undefined 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});