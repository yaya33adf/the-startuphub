import { Link } from "react-router-dom";

const Resources = () => {
  return (
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
  );
};

export default Resources;