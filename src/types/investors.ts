export interface Investor {
  id: string;
  name: string;
  email: string;
  user_type: string;
  investment_preferences?: string[];
  country?: string;
  company?: string;
  investment_stage?: string;
  image_url?: string;
}