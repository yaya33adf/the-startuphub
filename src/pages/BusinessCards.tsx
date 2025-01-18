import { PageSEO } from "@/components/seo/PageSEO";
import { useToast } from "@/components/ui/use-toast";
import * as htmlToImage from 'html-to-image';
import { BusinessCardGrid } from "@/components/business-cards/BusinessCardGrid";

const BusinessCards = () => {
  const { toast } = useToast();

  const handleDownload = async (templateId: number) => {
    try {
      // Get the template element
      const templateElement = document.getElementById(`template-${templateId}`);
      if (!templateElement) {
        throw new Error("Template element not found");
      }

      // Convert the element to a PNG image
      const dataUrl = await htmlToImage.toPng(templateElement, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#ffffff'
      });

      // Create a download link
      const link = document.createElement('a');
      link.download = `business-card-${templateId}.png`;
      link.href = dataUrl;
      link.click();

      toast({
        title: "Download successful!",
        description: "Your business card has been downloaded as a PNG image.",
      });

    } catch (error) {
      console.error("Download error:", error);
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "There was an error creating your business card image.",
      });
    }
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

        <BusinessCardGrid onDownload={handleDownload} />
      </div>
    </div>
  );
};

export default BusinessCards;