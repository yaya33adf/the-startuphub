import { Card } from "@/components/ui/card";
import { TeamRecommendationForm } from "@/components/tools/TeamRecommendationForm";
import { PageSEO } from "@/components/seo/PageSEO";

const Team = () => {
  return (
    <>
      <PageSEO 
        title="Team Building & Management"
        description="Build and manage your dream team with our team building tools, role recommendations, and collaboration features."
      />
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Team Building</h1>
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Build Your Dream Team</h2>
            <p className="text-gray-600 mb-4">
              Get personalized recommendations for building the perfect team based on your project needs.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Identify key roles needed for your project</li>
              <li>Receive skill-based team composition suggestions</li>
              <li>Scale your team efficiently</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Team Management</h2>
            <p className="text-gray-600 mb-4">
              Tools and resources to help you manage and grow your team effectively.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Track team performance and progress</li>
              <li>Manage team assignments and roles</li>
              <li>Facilitate team collaboration</li>
            </ul>
          </Card>
        </div>
        <TeamRecommendationForm />
      </div>
    </>
  );
};

export default Team;
