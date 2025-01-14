import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { keyword, industry } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a creative brand name generator. Generate 5 unique, memorable, and relevant brand names. Return only the names in a comma-separated format.',
          },
          {
            role: 'user',
            content: `Generate 5 brand names for a ${industry} business, using the keyword "${keyword}" as inspiration. The names should be unique, memorable, and available as .com domains.`,
          },
        ],
        temperature: 0.8,
      }),
    });

    const data = await response.json();
    const generatedNames = data.choices[0].message.content.split(',').map((name: string) => name.trim());

    return new Response(
      JSON.stringify({ names: generatedNames }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate brand names' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});