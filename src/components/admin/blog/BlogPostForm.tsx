import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface BlogPostFormData {
  keyword: string;
}

export const BlogPostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<BlogPostFormData>();

  const onSubmit = async (data: BlogPostFormData) => {
    try {
      setIsLoading(true);
      console.log('Generating blog content for keyword:', data.keyword);

      const { data: generatedContent, error: functionError } = await supabase.functions.invoke(
        'generate-blog-content',
        {
          body: { keyword: data.keyword },
        }
      );

      if (functionError) {
        console.error('Error generating content:', functionError);
        toast.error('Failed to generate blog content');
        return;
      }

      console.log('Generated content:', generatedContent);

      const { error: insertError } = await supabase
        .from('blog_posts')
        .insert({
          title: generatedContent.title,
          content: generatedContent.content,
          status: 'published',
          author_id: (await supabase.auth.getUser()).data.user?.id,
        });

      if (insertError) {
        console.error('Error saving blog post:', insertError);
        toast.error('Failed to save blog post');
        return;
      }

      toast.success('Blog post created successfully!');
      form.reset();
    } catch (error) {
      console.error('Error in blog post creation:', error);
      toast.error('An error occurred while creating the blog post');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="keyword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Main Keyword</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter the main topic or keyword for the blog post" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Blog Post'}
        </Button>
      </form>
    </Form>
  );
};