import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-primary">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;