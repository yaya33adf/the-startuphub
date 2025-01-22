import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sampleProblems = [
  {
    title: "Need help optimizing my e-commerce website's loading speed",
    description: "My Shopify store takes too long to load, especially on mobile devices. Looking for recommendations on how to improve performance and reduce bounce rates.",
    role_category: "Development",
    role: "Frontend Developer"
  },
  {
    title: "Creating an effective content marketing strategy",
    description: "I'm struggling to generate consistent, engaging content for my SaaS business. Need guidance on content planning, SEO optimization, and measuring content performance.",
    role_category: "Marketing",
    role: "Content Strategist"
  },
  {
    title: "Setting up secure payment processing",
    description: "Looking for advice on implementing secure payment processing for my mobile app. Need to ensure PCI compliance and handle multiple payment methods.",
    role_category: "Development",
    role: "Backend Developer"
  },
  {
    title: "Designing an intuitive onboarding flow",
    description: "Users are dropping off during the onboarding process of my web app. Need help designing a more engaging and user-friendly onboarding experience.",
    role_category: "Design",
    role: "UI/UX Designer"
  },
  {
    title: "Scaling my database infrastructure",
    description: "As my user base grows, I'm experiencing performance issues with my database. Need recommendations on optimization and scaling strategies.",
    role_category: "Development",
    role: "DevOps Engineer"
  }
];

export const SampleProblems = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Sample Problems</h2>
      <div className="grid gap-4">
        {sampleProblems.map((problem, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{problem.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{problem.description}</p>
              <div className="flex gap-2 text-sm">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                  {problem.role_category}
                </span>
                <span className="bg-secondary/10 text-secondary px-2 py-1 rounded">
                  {problem.role}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};