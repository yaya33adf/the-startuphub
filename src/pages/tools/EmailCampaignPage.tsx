import { PageSEO } from "@/components/seo/PageSEO";
import { EmailCampaignManager } from "@/components/tools/EmailCampaignManager";

const EmailCampaignPage = () => {
  return (
    <>
      <PageSEO 
        title="Email Campaign Manager"
        description="Create and manage email marketing campaigns efficiently."
      />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Email Campaign Manager</h1>
        <EmailCampaignManager />
      </div>
    </>
  );
};

export default EmailCampaignPage;