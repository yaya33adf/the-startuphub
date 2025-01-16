import { ToolCard } from "@/components/tools/ToolCard";
import { tools } from "@/components/tools/ToolsData";
import { PageSEO } from "@/components/seo/PageSEO";

const Tools = () => {
  // Filter to show only tools with active components
  const activeTools = tools.filter(tool => tool.active);
  const inactiveTools = tools.filter(tool => !tool.active);

  return (
    <>
      <PageSEO 
        title="Business Tools & Resources"
        description="Access essential business tools and resources to help you manage, grow, and scale your business effectively."
      />
      <div className="container mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Business Tools</h1>
          <p className="text-muted-foreground">
            Essential tools to help you manage and grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>

        {inactiveTools.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-12 mb-6">Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-70">
              {inactiveTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </>
        )}

        <div className="mt-12 text-center text-muted-foreground">
          <p>More business tools coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Tools;
