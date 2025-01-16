import { PageSEO } from "@/components/seo/PageSEO";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <PageSEO
        title="About Us - The Startup Hub"
        description="Learn about The Startup Hub's mission to help entrepreneurs track market trends, discover opportunities, and access tools for business growth."
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About The Startup Hub</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                The Startup Hub is dedicated to empowering entrepreneurs and innovators
                with the tools, insights, and resources they need to succeed in today's
                dynamic business landscape.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Real-time market trend analysis</li>
                <li>• Comprehensive business tools</li>
                <li>• Community support and networking</li>
                <li>• Expert insights and guidance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;