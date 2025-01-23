import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { JobPostingForm } from "@/components/job-board/JobPostingForm";
import { JobPostingList } from "@/components/job-board/JobPostingList";
import { PageSEO } from "@/components/seo/PageSEO";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const JobBoard = () => {
  const [showForm, setShowForm] = useState(false);

  const { data: jobPostings, isLoading } = useQuery({
    queryKey: ["jobPostings"],
    queryFn: async () => {
      console.log("Fetching job postings...");
      const { data, error } = await supabase
        .from("job_postings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching job postings:", error);
        throw error;
      }
      return data;
    },
  });

  return (
    <>
      <PageSEO
        title="Job Board - Find & Post Jobs"
        description="Browse and post job opportunities for freelancers and businesses."
      />
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Job Board</h1>
            <p className="text-muted-foreground">
              Find opportunities or post your job requirements
            </p>
          </div>
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className="w-4 h-4 mr-2" />
            Post a Job
          </Button>
        </div>

        {showForm && (
          <div className="mb-8">
            <JobPostingForm onSuccess={() => setShowForm(false)} />
          </div>
        )}

        <JobPostingList jobPostings={jobPostings || []} isLoading={isLoading} />
      </div>
    </>
  );
};

export default JobBoard;