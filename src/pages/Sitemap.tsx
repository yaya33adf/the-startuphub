import { PageSEO } from "@/components/seo/PageSEO";
import { MainNavigation } from "@/components/sitemap/MainNavigation";
import { BusinessTools } from "@/components/sitemap/BusinessTools";
import { CommunitySupport } from "@/components/sitemap/CommunitySupport";
import { AccountSettings } from "@/components/sitemap/AccountSettings";
import { LearnSection } from "@/components/sitemap/LearnSection";
import { TemplatesSection } from "@/components/sitemap/TemplatesSection";
import { InvestorsSection } from "@/components/sitemap/InvestorsSection";
import { LegalSection } from "@/components/sitemap/LegalSection";

const Sitemap = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageSEO 
        title="Sitemap - Navigate Our Platform"
        description="Explore all sections and features of our platform with our comprehensive sitemap. Find tools, resources, and community features easily."
      />
      <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <MainNavigation />
        <BusinessTools />
        <CommunitySupport />
        <AccountSettings />
        <LearnSection />
        <TemplatesSection />
        <InvestorsSection />
        <LegalSection />
      </div>
    </div>
  );
};

export default Sitemap;