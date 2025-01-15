import { Card } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Users Management</h2>
          <p className="text-muted-foreground">
            Manage user accounts and permissions
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Content Management</h2>
          <p className="text-muted-foreground">
            Manage blog posts and site content
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          <p className="text-muted-foreground">
            View site statistics and user analytics
          </p>
        </Card>
      </div>
    </div>
  );
}