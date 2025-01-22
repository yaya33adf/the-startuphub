import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";

interface SWOTDownloadButtonProps {
  onDownload: () => Promise<void>;
}

export const SWOTDownloadButton = ({ onDownload }: SWOTDownloadButtonProps) => {
  const { toast } = useToast();

  const handleDownload = async () => {
    try {
      await onDownload();
      toast({
        title: "Success",
        description: "SWOT Analysis downloaded successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download SWOT Analysis",
        variant: "destructive",
      });
    }
  };

  return (
    <Button onClick={handleDownload}>Download as Image</Button>
  );
};