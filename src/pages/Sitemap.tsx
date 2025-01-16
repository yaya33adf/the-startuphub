import { WebsiteSchema } from "@/components/seo/schemas/WebsiteSchema";
import { PageSEO } from "@/components/seo/PageSEO";

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO 
        title="Site Map - The Startup Hub"
        description="Navigate through all sections and pages of The Startup Hub platform."
      />
      <WebsiteSchema />
      
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Site Map</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Navigation */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Business Tools & Resources */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Business Tools & Resources</h2>
            <ul className="space-y-2">
              <li>
                <a href="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Tools
                </a>
              </li>
              <li>
                <a href="/markets" className="text-muted-foreground hover:text-primary transition-colors">
                  Markets
                </a>
              </li>
              <li>
                <a href="/trends" className="text-muted-foreground hover:text-primary transition-colors">
                  Trends
                </a>
              </li>
              <li>
                <a href="/side-hustles" className="text-muted-foreground hover:text-primary transition-colors">
                  Side Hustles
                </a>
              </li>
              <li>
                <a href="/startups" className="text-muted-foreground hover:text-primary transition-colors">
                  Startups
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
                <a href="/feedback" className="text-muted-foreground hover:text-primary transition-colors">
                  Feedback
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Account & Settings */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Account & Settings</h2>
            <ul className="space-y-2">
              <li>
                <a href="/auth/signin" className="text-muted-foreground hover:text-primary transition-colors">
                  Sign In
                </a>
              </li>
              <li>
                <a href="/auth/signup" className="text-muted-foreground hover:text-primary transition-colors">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/auth/profile" className="text-muted-foreground hover:text-primary transition-colors">
                  Profile Settings
                </a>
              </li>
            </ul>
          </div>

          {/* For Investors */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">For Investors</h2>
            <ul className="space-y-2">
              <li>
                <a href="/investors" className="text-muted-foreground hover:text-primary transition-colors">
                  Investors
                </a>
              </li>
              <li>
                <a href="/schedule-call" className="text-muted-foreground hover:text-primary transition-colors">
                  Schedule Call
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Legal</h2>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
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