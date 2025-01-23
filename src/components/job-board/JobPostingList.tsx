import { JobPostingCard } from "./JobPostingCard";
import { Skeleton } from "@/components/ui/skeleton";

interface JobPosting {
  id: string;
  title: string;
  category: string;
  description: string;
  estimated_time: string;
  budget: number;
  poster_name: string;
  country: string;
  created_at: string;
}

interface JobPostingListProps {
  jobPostings: JobPosting[];
  isLoading: boolean;
}

export const JobPostingList = ({ jobPostings, isLoading }: JobPostingListProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full" />
        ))}
      </div>
    );
  }

  if (jobPostings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No job postings yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobPostings.map((job) => (
        <JobPostingCard key={job.id} job={job} />
      ))}
    </div>
  );
};