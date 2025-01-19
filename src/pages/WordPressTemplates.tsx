import { PageSEO } from "@/components/seo/PageSEO";
import { useToast } from "@/components/ui/use-toast";
import { WordPressTemplateGrid } from "@/components/wordpress-templates/WordPressTemplateGrid";

const WordPressTemplates = () => {
  const { toast } = useToast();

  const handleDownload = async (templateId: number) => {
    try {
      toast({
        title: "Download successful!",
        description: "Your WordPress template has been downloaded.",
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "There was an error downloading your template.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageSEO 
        title="Amazing Startup WordPress Ready Templates" 
        description="Choose from our collection of modern, startup-focused WordPress templates designed for technology companies" 
      />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
          Amazing Startup WordPress Ready Templates
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Launch your startup website quickly with our professionally designed WordPress templates. 
          Each template is optimized for performance and customized for modern tech startups.
        </p>

        <WordPressTemplateGrid onDownload={handleDownload} />
      </div>
    </div>
  );
};

export default WordPressTemplates;