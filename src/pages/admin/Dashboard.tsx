import { useEffect } from "react";
import { StatisticsCards } from "@/components/admin/StatisticsCards";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import { SiteSettings } from "@/components/admin/SiteSettings";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Clear any pending messages when component mounts
    return () => {
      // Cleanup function to handle any pending async operations
      console.log("Cleaning up admin dashboard");
    };
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <StatisticsCards />

      <div className="grid gap-6 md:grid-cols-2">
        <BlogPostForm />
        <SiteSettings />
      </div>
    </div>
  );
};

export default AdminDashboard;