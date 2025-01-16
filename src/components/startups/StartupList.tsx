import { useState } from "react";
import { StartupCard } from "./StartupCard";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

export const StartupList = () => {
  const [sortBy, setSortBy] = useState<"rating" | "newest">("rating");

  const { data: startups, isLoading } = useQuery({
    queryKey: ["startups", sortBy],
    queryFn: async () => {
      console.log("Fetching startups with sort:", sortBy);
      const { data, error } = await supabase
        .from("startups")
        .select("*")
        .order(sortBy === "rating" ? "rating" : "created_at", { ascending: false });

      if (error) {
        console.error("Error fetching startups:", error);
        throw error;
      }
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end mb-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "rating" | "newest")}
          className="border rounded p-2"
        >
          <option value="rating">Sort by Rating</option>
          <option value="newest">Sort by Newest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups?.map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  );
};