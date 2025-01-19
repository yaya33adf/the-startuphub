import { StatisticsCards } from "@/components/admin/StatisticsCards";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import { SiteSettings } from "@/components/admin/SiteSettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageSEO } from "@/components/seo/PageSEO";

const Dashboard = () => {
  return (
    <>
      <PageSEO 
        title="Admin Dashboard" 
        description="Manage your website content and settings"
      />
      
      <div className="container mx-auto py-8 space-y-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        
        <StatisticsCards />
        
        <Tabs defaultValue="blog" className="w-full">
          <TabsList>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="settings">Site Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blog" className="mt-6">
            <BlogPostForm />
          </TabsContent>
          
          <TabsContent value="settings" className="mt-6">
            <SiteSettings />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;