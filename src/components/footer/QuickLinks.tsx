import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
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
  );
};

export default QuickLinks;