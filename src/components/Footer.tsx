import CompanyInfo from "./footer/CompanyInfo";
import QuickLinks from "./footer/QuickLinks";
import Resources from "./footer/Resources";
import SocialLinks from "./footer/SocialLinks";
import Copyright from "./footer/Copyright";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CompanyInfo />
          <QuickLinks />
          <Resources />
          <SocialLinks />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;