import { WebsiteSchema } from "@/components/seo/schemas/WebsiteSchema";
import { PageSEO } from "@/components/seo/PageSEO";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO 
        title="Site Map - Complete Website Navigation Guide"
        description="Navigate through all sections of The Startup Hub platform including business tools, market analysis, side hustles, and community features."
      />
      <WebsiteSchema />
      
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Site Map</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Navigation */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home - Business Opportunities & Market Trends
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us - Our Mission & Vision
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog - Business Insights & Analysis
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact - Get in Touch
                </Link>
              </li>
            </ul>
          </Card>

          {/* Business Tools & Resources */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">Business Tools & Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Business Tools - Essential Management Resources
                </Link>
              </li>
              <li>
                <Link to="/markets" className="text-muted-foreground hover:text-primary transition-colors">
                  Market Analysis - Trends & Opportunities
                </Link>
              </li>
              <li>
                <Link to="/trends" className="text-muted-foreground hover:text-primary transition-colors">
                  Trend Analysis - Real-time Market Insights
                </Link>
              </li>
              <li>
                <Link to="/side-hustles" className="text-muted-foreground hover:text-primary transition-colors">
                  Side Hustles - Extra Income Opportunities
                </Link>
              </li>
              <li>
                <Link to="/startups" className="text-muted-foreground hover:text-primary transition-colors">
                  Startup Directory - Innovative Companies
                </Link>
              </li>
              <li>
                <Link to="/crowdfunding" className="text-muted-foreground hover:text-primary transition-colors">
                  Crowdfunding - Investment Opportunities
                </Link>
              </li>
            </ul>
          </Card>

          {/* Community & Support */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">Community & Support</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community - Connect & Collaborate
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-muted-foreground hover:text-primary transition-colors">
                  Feedback - Share Your Ideas
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ - Common Questions
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team Building - Grow Your Business
                </Link>
              </li>
            </ul>
          </Card>

          {/* Account & Settings */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">Account & Settings</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/auth/signin" className="text-muted-foreground hover:text-primary transition-colors">
                  Sign In - Access Your Account
                </Link>
              </li>
              <li>
                <Link to="/auth/signup" className="text-muted-foreground hover:text-primary transition-colors">
                  Sign Up - Join Our Platform
                </Link>
              </li>
              <li>
                <Link to="/auth/profile" className="text-muted-foreground hover:text-primary transition-colors">
                  Profile Settings - Manage Your Account
                </Link>
              </li>
            </ul>
          </Card>

          {/* For Investors */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">For Investors</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/investors" className="text-muted-foreground hover:text-primary transition-colors">
                  Investors Hub - Investment Opportunities
                </Link>
              </li>
              <li>
                <Link to="/schedule-call" className="text-muted-foreground hover:text-primary transition-colors">
                  Schedule Call - Connect with Our Team
                </Link>
              </li>
            </ul>
          </Card>

          {/* Legal */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">Legal Information</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy - Data Protection
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service - Usage Guidelines
                </Link>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;