import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLine, Briefcase, Lightbulb, Wrench, BookOpen, ArrowRight, Users, TrendingUp, DollarSign, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { TrendSearch } from "@/components/TrendSearch";
import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { TrendResults } from "@/components/TrendResults";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSearchResults = (results: TrendData) => {
    setSearchResults(results);
    console.log("Search results received on Index page:", results);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our latest updates soon.",
    });
    setEmail("");
  };

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
          <div className="mb-8">
            <TrendSearch onSearchResults={handleSearchResults} />
            {searchResults && <TrendResults data={searchResults} />}
          </div>
          <Button size="lg" asChild>
            <Link to="/trends">Explore Trends</Link>
          </Button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Users className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">10K+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <TrendingUp className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">50K+</h3>
              <p className="text-muted-foreground">Trends Analyzed</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Briefcase className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-muted-foreground">Side Hustles</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <DollarSign className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">$2M+</h3>
              <p className="text-muted-foreground">User Earnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartLine className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Analyze Trends</h3>
              <p className="text-muted-foreground">
                Use our advanced analytics to identify emerging market opportunities
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Discover Opportunities</h3>
              <p className="text-muted-foreground">
                Find profitable side hustles aligned with your skills and interests
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Build & Scale</h3>
              <p className="text-muted-foreground">
                Access tools and resources to grow your business effectively
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Side Hustles */}
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

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest trends, opportunities, and insights delivered to your inbox
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              required
            />
            <Button type="submit" variant="secondary">
              Subscribe
            </Button>
          </form>
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
