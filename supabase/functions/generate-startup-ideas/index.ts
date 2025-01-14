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
            content: `You are a startup idea generator. Generate 5 innovative startup ideas based on the given keyword.
                     Return ONLY a JSON array of objects with these fields:
                     - name (string): startup name
                     - description (string): 2-3 sentences about the idea
                     - market (string): target market/industry
                     Example: [{"name":"EcoTrack","description":"A sustainability tracking app...","market":"Environmental Tech"}]`
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
      console.error('OpenAI API error:', await response.text());
      throw new Error('Failed to get response from OpenAI API');
    }

    const data = await response.json();
    console.log('OpenAI API response:', data);

    if (!data.choices?.[0]?.message?.content) {
      console.error('Invalid OpenAI API response structure:', data);
      throw new Error('Invalid response from OpenAI API');
    }

    try {
      const content = data.choices[0].message.content.trim();
      console.log('Raw content from OpenAI:', content);
      
      // Attempt to parse the content as JSON
      const parsedIdeas = JSON.parse(content);
      
      if (!Array.isArray(parsedIdeas)) {
        throw new Error('Generated content is not an array');
      }

      // Validate the structure of each idea
      const validatedIdeas = parsedIdeas.map(idea => {
        if (!idea.name || !idea.description || !idea.market) {
          throw new Error('Invalid idea structure');
        }
        return {
          name: String(idea.name),
          description: String(idea.description),
          market: String(idea.market)
        };
      });

      console.log('Successfully parsed and validated ideas:', validatedIdeas);
      
      return new Response(JSON.stringify({ ideas: validatedIdeas }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
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