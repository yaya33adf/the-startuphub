import { Link } from "react-router-dom";
import { Twitter, MessageSquare, HelpCircle, Linkedin, Facebook } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-primary">Connect</h3>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="text-muted-foreground hover:text-primary transition-colors"
          title="Contact Us"
        >
          <MessageSquare className="h-5 w-5" />
        </Link>
        <Link
          to="/faq"
          className="text-muted-foreground hover:text-primary transition-colors"
          title="FAQ"
        >
          <HelpCircle className="h-5 w-5" />
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
          href="https://www.linkedin.com/company/106166249/admin/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61571855265076"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Facebook className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;