import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLine, Briefcase, Lightbulb, Wrench, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to The Startup Hub
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Your comprehensive platform for tracking market trends, exploring opportunities, and discovering side hustles
          </p>
          <Button size="lg" asChild>
            <Link to="/trends">Explore Trends</Link>
          </Button>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <ChartLine className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Trends</CardTitle>
              <CardDescription>
                Stay updated with the latest trends across industries and markets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access real-time trend scores and analytics to make informed decisions
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/trends">View Trends</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Briefcase className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Markets</CardTitle>
              <CardDescription>
                Explore different markets and identify profitable niches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get insights into various industries and sectors
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/markets">Explore Markets</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Side Hustles</CardTitle>
              <CardDescription>
                Discover ways to monetize your skills and hobbies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Find actionable ideas and resources for starting your side business
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/side-hustles">Discover Ideas</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Wrench className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Tools for Startups</CardTitle>
              <CardDescription>
                Essential resources for entrepreneurs and startups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access tools and tips to grow your online presence
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/tools">View Tools</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Blog</CardTitle>
              <CardDescription>
                Expert advice and insights for your business journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Read articles with business tips and market analysis
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/blog">Read Articles</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Trend Scores API</h3>
              <p className="text-muted-foreground">
                Real-time scores ranking websites and apps based on popularity
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Resource Hub</h3>
              <p className="text-muted-foreground">
                Comprehensive library of guides and tutorials
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Discover emerging opportunities and innovative ideas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
