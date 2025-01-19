import { BookOpen } from "lucide-react";
import { PageSEO } from "@/components/seo/PageSEO";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Blog = () => {
  return (
    <>
      <PageSEO 
        title="Blog - Business Insights & Market Analysis"
        description="Read expert articles on business trends, market analysis, and entrepreneurial insights to help grow your business and stay ahead of the competition."
      />
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-6">
          <BookOpen className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Blog</h1>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Coming Soon!</CardTitle>
            <CardDescription className="text-center">
              Our blog is currently under development. Stay tuned for expert insights on business trends, 
              market analysis, and entrepreneurial guidance.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            <p>We're working hard to bring you valuable content that will help you:</p>
            <ul className="mt-4 space-y-2">
              <li>• Stay ahead of market trends</li>
              <li>• Learn from successful entrepreneurs</li>
              <li>• Discover growth opportunities</li>
              <li>• Access expert business insights</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Blog;