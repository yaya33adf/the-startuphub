import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export const TotalUsersCard = () => {
  const { data: totalUsers, isLoading } = useQuery({
    queryKey: ["totalUsers"],
    queryFn: async () => {
      console.log("Fetching total users count");
      const { count, error } = await supabase
        .from("users")
        .select("*", { count: "exact", head: true });

      if (error) {
        console.error("Error fetching total users:", error);
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
        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {isLoading ? "Loading..." : totalUsers}
        </div>
      </CardContent>
    </Card>
  );
};