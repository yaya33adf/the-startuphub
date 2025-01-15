export interface TrendData {
  score: number;
  metadata: {
    github?: {
      score: number;
      metadata?: any;
    };
    google_trends?: {
      score: number;
      metadata?: any;
    };
    reddit?: {
      score: number;
      metadata?: any;
    };
    hacker_news?: {
      score: number;
      metadata?: any;
    };
    stack_overflow?: {
      score: number;
      metadata?: any;
    };
    wikipedia?: {
      score: number;
      metadata?: any;
    };
    npm?: {
      score: number;
      metadata?: any;
    };
    pypi?: {
      score: number;
      metadata?: any;
    };
    [key: string]: any;  // Allow any additional properties
  } | Record<string, any>;  // Allow any object structure for metadata
}