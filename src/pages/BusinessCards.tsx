import { PageSEO } from "@/components/seo/PageSEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const BusinessCards = () => {
  const templates = [
    {
      id: 1,
      name: "Modern Minimal",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      accentColor: "border-purple-500",
    },
    {
      id: 2,
      name: "Bold Professional",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      accentColor: "border-yellow-500",
    },
    {
      id: 3,
      name: "Creative Gradient",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-white",
      accentColor: "border-white",
    },
    {
      id: 4,
      name: "Corporate Blue",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      accentColor: "border-blue-200",
    },
    {
      id: 5,
      name: "Elegant Serif",
      bgColor: "bg-cream-50",
      textColor: "text-gray-800",
      accentColor: "border-gray-300",
    },
    {
      id: 6,
      name: "Tech Startup",
      bgColor: "bg-black",
      textColor: "text-green-400",
      accentColor: "border-green-400",
    },
  ];

  const handleDownload = (templateId: number) => {
    // TODO: Implement download functionality
    console.log(`Downloading template ${templateId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageSEO 
        title="Business Card Templates" 
        description="Choose from our collection of professional business card templates" 
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Business Card Templates</h1>
        <p className="text-muted-foreground mb-8">
          Choose from our collection of professionally designed business card templates. 
          Each template can be customized with your own information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className={`aspect-[1.75] ${template.bgColor} p-6 relative group`}>
                  {/* Business Card Preview */}
                  <div className={`w-full h-full border-2 ${template.accentColor} flex flex-col justify-between p-4`}>
                    <div className={`${template.textColor}`}>
                      <h3 className="text-lg font-bold">John Doe</h3>
                      <p className="text-sm opacity-80">CEO & Founder</p>
                    </div>
                    <div className={`${template.textColor} text-sm opacity-80`}>
                      <p>+1 (555) 123-4567</p>
                      <p>john@example.com</p>
                      <p>www.example.com</p>
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
                      Use Template
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{template.name}</h3>
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