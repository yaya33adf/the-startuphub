import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const TotalUsersCard = () => {
  const { data: usersData, isLoading } = useQuery({
    queryKey: ["totalUsers"],
    queryFn: async () => {
      console.log("Fetching users data");
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("email")
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching users:", error);
        throw error;
      }
      return profiles || [];
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
        <div className="text-2xl font-bold mb-4">
          {isLoading ? "Loading..." : usersData?.length || 0}
        </div>
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          <div className="space-y-2">
            {usersData?.map((user, index) => (
              <div key={index} className="text-sm">
                {user.email}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};