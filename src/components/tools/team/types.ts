export interface TeamMember {
  id: string;
  user_id: string;
  member_name: string;
  role: string;
  email: string;
  status?: string;
  assignment?: string;
  due_date?: string;
}

export interface TeamMemberFormData {
  member_name: string;
  role: string;
  email: string;
  assignment: string;
  due_date: string;
}