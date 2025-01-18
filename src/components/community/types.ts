export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  tags?: string[];
  users?: {
    name: string | null;
  } | null;
  likes?: number;
  comments?: number;
}