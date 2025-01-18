import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { StatisticsCards } from "@/components/admin/StatisticsCards";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import { SiteSettings } from "@/components/admin/SiteSettings";
import { Loader2 } from "lucide-react";

const AdminDashboard = () => {
  const { user, profile, isLoading } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    console.log("Dashboard - Auth state:", { user, profile, isLoading });

    if (!isLoading && profile) {
      if (profile.role !== 'admin') {
        console.log("Dashboard - User is not admin, redirecting");
        navigate('/');
      } else {
        console.log("Dashboard - User is admin");
        setIsAdmin(true);
      }
    }
  }, [user, profile, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <StatisticsCards />

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <BlogPostForm />
        <SiteSettings />
      </div>
    </div>
  );
};

export default AdminDashboard;