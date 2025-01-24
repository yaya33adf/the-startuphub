import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  keyword: z.string().min(2, "Keyword must be at least 2 characters"),
});

type BlogPostFormData = z.infer<typeof formSchema>;

export const BlogPostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<BlogPostFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keyword: "",
    },
  });

  const onSubmit = async (data: BlogPostFormData) => {
    try {
      setIsLoading(true);
      console.log('Starting blog post generation for keyword:', data.keyword);

      const { data: generatedContent, error: functionError } = await supabase.functions.invoke(
        'generate-blog-content',
        {
          body: { keyword: data.keyword },
        }
      );

      if (functionError) {
        console.error('Edge function error:', functionError);
        toast.error('Failed to generate blog content. Please try again.');
        return;
      }

      if (!generatedContent || !generatedContent.title || !generatedContent.content) {
        console.error('Invalid content structure:', generatedContent);
        toast.error('Generated content is invalid. Please try again.');
        return;
      }

      console.log('Successfully generated content:', {
        titleLength: generatedContent.title.length,
        contentLength: generatedContent.content.length
      });

      const user = await supabase.auth.getUser();
      if (!user.data.user) {
        console.error('No authenticated user found');
        toast.error('You must be logged in to create blog posts');
        return;
      }

      const { error: insertError } = await supabase
        .from('blog_posts')
        .insert({
          title: generatedContent.title,
          content: generatedContent.content,
          status: 'published',
          author_id: user.data.user.id,
        });

      if (insertError) {
        console.error('Database insertion error:', insertError);
        toast.error('Failed to save blog post to database');
        return;
      }

      console.log('Blog post successfully saved to database');
      toast.success('Blog post created successfully!');
      form.reset();
    } catch (error) {
      console.error('Unexpected error in blog post creation:', error);
      toast.error('An unexpected error occurred');
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

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Generating...' : 'Generate Blog Post'}
        </Button>
      </form>
    </Form>
  );
};