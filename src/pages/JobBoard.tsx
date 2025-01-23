import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { JobPostingForm } from "@/components/job-board/JobPostingForm";
import { JobPostingList } from "@/components/job-board/JobPostingList";
import { PageSEO } from "@/components/seo/PageSEO";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const sampleJob = {
  id: "sample-job",
  title: "Frontend Developer Needed",
  category: "Development",
  description: "Looking for a skilled frontend developer to help build modern web applications using React and TypeScript. Experience with Tailwind CSS and component libraries is a plus.",
  estimated_time: "2-3 months",
  budget: 5000,
  poster_name: "Tech Startup Inc.",
  country: "United States",
  created_at: new Date().toISOString()
};

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

      // If no jobs found, return array with sample job
      if (!data || data.length === 0) {
        console.log("No jobs found, returning sample job");
        return [sampleJob];
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