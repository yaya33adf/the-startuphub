export interface TeamMember {
  id: string;
  user_id: string;
  member_name: string;
  role: string;
  email: string;
  status?: string;
  assignment: string | null;
  due_date: string | null;
}

export interface TeamMemberFormData {
  member_name: string;
  role: string;
  email: string;
  assignment: string;
  due_date: string;
}