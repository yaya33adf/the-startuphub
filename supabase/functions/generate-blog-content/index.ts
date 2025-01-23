import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

console.log('Hello from generate-blog-content!')

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY')
    if (!openAIApiKey) {
      console.error('OpenAI API key not configured');
      throw new Error('OpenAI API key not configured');
    }

    const { keyword } = await req.json();
    if (!keyword) {
      console.error('No keyword provided');
      throw new Error('No keyword provided');
    }
    
    console.log('Generating blog content for keyword:', keyword);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a professional blog writer. Create a blog post with a title and content. The title should be on the first line starting with #. The content should follow after a blank line.',
          },
          {
            role: 'user',
            content: `Write a blog post about ${keyword}. Make it informative and engaging.`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log('OpenAI response received:', {
      status: response.status,
      hasChoices: !!data.choices,
      firstChoice: !!data.choices?.[0]
    });
    
    if (!data.choices?.[0]?.message?.content) {
      console.error('Invalid response structure:', data);
      throw new Error('No content generated');
    }

    const generatedContent = data.choices[0].message.content;
    console.log('Raw generated content:', generatedContent);

    // Split content into title and body
    const lines = generatedContent.split('\n');
    const title = lines[0].replace('#', '').trim();
    const content = lines.slice(2).join('\n').trim(); // Skip the blank line after title

    console.log('Successfully generated content:', {
      titleLength: title.length,
      contentLength: content.length
    });

    return new Response(
      JSON.stringify({
        title,
        content,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error:', error.message);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.stack
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})