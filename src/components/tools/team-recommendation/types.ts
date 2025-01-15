export interface FormData {
  project_name: string;
  project_description: string;
  project_type: string;
  project_size: string;
  budget_range: string;
  timeline: string;
}

export interface TeamRole {
  role: string;
  count: number;
}

export interface TeamRecommendation extends FormData {
  id: string;
  user_id: string | null;
  recommended_roles: TeamRole[];
  created_at?: string;
  updated_at?: string;
}