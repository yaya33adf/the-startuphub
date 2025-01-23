import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

console.log('Hello from generate-blog-content!')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY')
    const { keyword } = await req.json();
    console.log('Generating blog content for keyword:', keyword);

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
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

    const lines = generatedContent.split('\n');
    const title = lines[0].replace('#', '').trim();
    const content = lines.slice(1).join('\n').trim();

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
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})