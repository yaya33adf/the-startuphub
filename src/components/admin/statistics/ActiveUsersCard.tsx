import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck } from "lucide-react";

export const ActiveUsersCard = () => {
  const { data: activeUsers, isLoading } = useQuery({
    queryKey: ["activeUsers"],
    queryFn: async () => {
      console.log("Fetching active users count");
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { count, error } = await supabase
        .from("users")
        .select("*", { count: "exact", head: true })
        .gte("created_at", thirtyDaysAgo.toISOString());

      if (error) {
        console.error("Error fetching active users:", error);
        throw error;
      }
      return count || 0;
    },
    staleTime: 30000,
    refetchOnWindowFocus: false
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Active Users (30d)</CardTitle>
        <UserCheck className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {isLoading ? "Loading..." : activeUsers}
        </div>
      </CardContent>
    </Card>
  );
};