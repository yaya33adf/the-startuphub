import { StatisticsCards } from "@/components/admin/StatisticsCards";
import { SiteSettings } from "@/components/admin/SiteSettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageSEO } from "@/components/seo/PageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { List } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <PageSEO 
        title="Admin Dashboard" 
        description="Manage your website content and settings"
      />
      
      <div className="container mx-auto py-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" asChild>
            <Link to="/admin/roadmaps" className="flex items-center gap-2">
              <List className="h-4 w-4" />
              Manage Roadmaps
            </Link>
          </Button>
        </div>
        
        <StatisticsCards />
        
        <Tabs defaultValue="settings" className="w-full">
          <TabsList>
            <TabsTrigger value="settings">Site Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="settings" className="mt-6">
            <SiteSettings />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;