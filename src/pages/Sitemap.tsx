import { WebsiteSchema } from "@/components/seo/schemas/WebsiteSchema";
import { PageSEO } from "@/components/seo/PageSEO";
import { MainNavigation } from "@/components/sitemap/MainNavigation";
import { BusinessTools } from "@/components/sitemap/BusinessTools";
import { CommunitySupport } from "@/components/sitemap/CommunitySupport";
import { AccountSettings } from "@/components/sitemap/AccountSettings";
import { InvestorsSection } from "@/components/sitemap/InvestorsSection";
import { LegalSection } from "@/components/sitemap/LegalSection";
import { TemplatesSection } from "@/components/sitemap/TemplatesSection";
import { LearnSection } from "@/components/sitemap/LearnSection";

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO 
        title="Site Map - Complete Website Navigation Guide"
        description="Navigate through all sections of The Startup Hub platform including business tools, market analysis, side hustles, and community features."
      />
      <WebsiteSchema />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Site Map</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Navigation */}
          <div className="space-y-8">
            <MainNavigation />
            <BusinessTools />
          </div>

          {/* Community & Support */}
          <div className="space-y-8">
            <CommunitySupport />
            <AccountSettings />
            <LearnSection />
          </div>

          {/* Additional Resources */}
          <div className="space-y-8">
            <InvestorsSection />
            <LegalSection />
            <TemplatesSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;