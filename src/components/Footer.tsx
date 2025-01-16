import { Github, Twitter, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary">The Startup Hub</h3>
            <p className="text-muted-foreground text-sm">
              Your comprehensive platform for tracking market trends and discovering opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/trends" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trends
                </Link>
              </li>
              <li>
                <Link to="/markets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Markets
                </Link>
              </li>
              <li>
                <Link to="/side-hustles" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Side Hustles
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary">Connect</h3>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Contact Us"
              >
                <MessageSquare className="h-5 w-5" />
              </Link>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Startup Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;