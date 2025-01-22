export interface TeamMember {
  id: string;
  member_name: string;
  role: string;
  email: string;
  assignment?: string;
  due_date?: string;
  status?: string;
  user_id: string;
}

export interface TeamMemberFormData {
  member_name: string;
  role: string;
  email: string;
  assignment: string;
  due_date: string;
}