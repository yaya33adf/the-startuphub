import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedSideHustles = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Side Hustles</h2>
          <Button variant="outline" asChild>
            <Link to="/side-hustles" className="flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Digital Product Creation</CardTitle>
              <CardDescription>Average Monthly Earnings: $2,000-$5,000</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Create and sell digital products like courses, ebooks, or templates
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/side-hustles">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Freelance Development</CardTitle>
              <CardDescription>Average Monthly Earnings: $3,000-$8,000</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Offer web development and programming services to clients
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/side-hustles">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Content Creation</CardTitle>
              <CardDescription>Average Monthly Earnings: $1,500-$4,000</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Create content for blogs, social media, and video platforms
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/side-hustles">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};