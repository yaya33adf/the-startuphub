import { WebsiteSchema } from "@/components/seo/schemas/WebsiteSchema";

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background">
      <WebsiteSchema />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Site Map</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Navigation */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Main Navigation</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/trends" className="text-muted-foreground hover:text-primary transition-colors">
                  Trends
                </a>
              </li>
              <li>
                <a href="/markets" className="text-muted-foreground hover:text-primary transition-colors">
                  Markets
                </a>
              </li>
              <li>
                <a href="/startups" className="text-muted-foreground hover:text-primary transition-colors">
                  Startups
                </a>
              </li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Tools & Resources</h2>
            <ul className="space-y-2">
              <li>
                <a href="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Tools
                </a>
              </li>
              <li>
                <a href="/side-hustles" className="text-muted-foreground hover:text-primary transition-colors">
                  Side Hustles
                </a>
              </li>
              <li>
                <a href="/crowdfunding" className="text-muted-foreground hover:text-primary transition-colors">
                  Crowdfunding
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Support */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Community & Support</h2>
            <ul className="space-y-2">
              <li>
                <a href="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-muted-foreground hover:text-primary transition-colors">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;