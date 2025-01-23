import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Clock, DollarSign, MapPin, User } from "lucide-react";

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

interface JobPostingCardProps {
  job: JobPosting;
}

export const JobPostingCard = ({ job }: JobPostingCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <User className="w-4 h-4" />
              <span>{job.poster_name}</span>
              <span>•</span>
              <MapPin className="w-4 h-4" />
              <span>{job.country}</span>
            </div>
          </div>
          <Badge variant="secondary">{job.category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{job.description}</p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>${job.budget}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{job.estimated_time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            <span>Posted {formatDistanceToNow(new Date(job.created_at))} ago</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};