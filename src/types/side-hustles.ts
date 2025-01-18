export interface SideHustle {
  id: string;
  name: string;
  description?: string;
  category: string;
  monthly_earnings_min?: number;
  monthly_earnings_max?: number;
  time_commitment?: string;
  difficulty?: string;
  skills?: string[];
  platforms?: string[];
  trend_score?: number;
}