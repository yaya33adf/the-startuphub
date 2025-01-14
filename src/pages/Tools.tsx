import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Code, Terminal, Database, LineChart, Lock, QrCode } from "lucide-react";
import { QRCodeGenerator } from "@/components/tools/QRCodeGenerator";

const Tools = () => {
  const tools = [
    {
      title: "QR Code Generator",
      description: "Generate QR codes for text or URLs",
      icon: QrCode,
      component: QRCodeGenerator,
    },
    {
      title: "API Testing",
      description: "Test and debug API endpoints with our intuitive interface",
      icon: Terminal,
    },
    {
      title: "Code Generator",
      description: "Generate boilerplate code for common programming tasks",
      icon: Code,
    },
    {
      title: "Database Explorer",
      description: "Explore and visualize your database structure",
      icon: Database,
    },
    {
      title: "Analytics Dashboard",
      description: "Track and analyze your startup metrics",
      icon: LineChart,
    },
    {
      title: "Security Scanner",
      description: "Scan your application for security vulnerabilities",
      icon: Lock,
    },
    {
      title: "Development Utils",
      description: "Various utilities for developers and startups",
      icon: Wrench,
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Startup Tools</h1>
        <p className="text-muted-foreground">
          Essential tools to help you build and grow your startup
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card key={tool.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <tool.icon className="h-6 w-6 text-primary" />
                <CardTitle>{tool.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{tool.description}</CardDescription>
              {tool.component && <tool.component />}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center text-muted-foreground">
        <p>More tools coming soon...</p>
      </div>
    </div>
  );
};

export default Tools;