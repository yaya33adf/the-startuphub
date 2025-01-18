import { PageSEO } from "@/components/seo/PageSEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const BusinessCards = () => {
  const templates = [
    {
      id: 1,
      name: "Tech Minimalist",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      accentColor: "border-blue-500",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Digital Innovation",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      accentColor: "border-purple-500",
      gradient: "bg-gradient-to-r from-purple-600 to-blue-500",
    },
    {
      id: 3,
      name: "Future Forward",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-white",
      accentColor: "border-white",
    },
    {
      id: 4,
      name: "AI Startup",
      bgColor: "bg-black",
      textColor: "text-green-400",
      accentColor: "border-green-400",
      pattern: "bg-[radial-gradient(#2C2C2C_1px,transparent_1px)] bg-[length:16px_16px]",
    },
    {
      id: 5,
      name: "Cloud Solutions",
      bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      textColor: "text-white",
      accentColor: "border-white",
    },
    {
      id: 6,
      name: "Data Analytics",
      bgColor: "bg-indigo-900",
      textColor: "text-white",
      accentColor: "border-indigo-400",
      pattern: "bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:64px_64px]",
    },
    {
      id: 7,
      name: "Blockchain Tech",
      bgColor: "bg-gradient-to-r from-orange-500 to-yellow-500",
      textColor: "text-white",
      accentColor: "border-white",
    },
    {
      id: 8,
      name: "Developer Tools",
      bgColor: "bg-zinc-900",
      textColor: "text-emerald-400",
      accentColor: "border-emerald-400",
      pattern: "bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]",
    },
    {
      id: 9,
      name: "SaaS Platform",
      bgColor: "bg-gradient-to-r from-blue-600 via-blue-800 to-purple-900",
      textColor: "text-white",
      accentColor: "border-blue-300",
    },
    {
      id: 10,
      name: "Cybersecurity",
      bgColor: "bg-black",
      textColor: "text-green-500",
      accentColor: "border-green-500",
      pattern: "bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23155e75\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')]",
    },
  ];

  const handleDownload = (templateId: number) => {
    // TODO: Implement download functionality
    console.log(`Downloading template ${templateId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageSEO 
        title="Best Business Card Designs for Tech Startups" 
        description="Choose from our collection of modern, tech-focused business card templates designed specifically for startups and technology companies" 
      />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
          Best Business Card Designs for Tech Startups
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Stand out with our professionally designed business card templates, 
          crafted specifically for technology startups and digital innovators.
          Each template can be customized with your company's information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden group">
              <CardContent className="p-0">
                <div 
                  className={`aspect-[1.75] ${template.bgColor} ${template.pattern || ''} p-6 relative group transition-all duration-300`}
                >
                  {/* Business Card Preview */}
                  <div 
                    className={`w-full h-full border-2 ${template.accentColor} flex flex-col justify-between p-4 backdrop-blur-sm bg-opacity-90`}
                  >
                    <div className={`${template.textColor}`}>
                      <h3 className="text-lg font-bold font-mono">STARTUP NAME</h3>
                      <p className="text-sm opacity-80 font-mono">INNOVATIVE SOLUTIONS</p>
                    </div>
                    <div className={`${template.textColor} text-sm opacity-80 space-y-1`}>
                      <p className="font-mono">John Developer</p>
                      <p className="font-mono">Lead Innovation Officer</p>
                      <p className="font-mono">contact@startup.tech</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button 
                      variant="secondary" 
                      onClick={() => handleDownload(template.id)}
                      className="gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download Template
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">Perfect for modern tech companies</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessCards;