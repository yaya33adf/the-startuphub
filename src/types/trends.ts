export interface TrendData {
  score: number;
  metadata: {
    github?: any;
    google_trends?: any;
    reddit?: any;
    hacker_news?: any;
    stack_overflow?: any;
    wikipedia?: any;
    npm?: any;
    pypi?: any;
  };
}