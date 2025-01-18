import { useState } from "react";
import { Youtube, Download, AudioWaveform } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const YouTubeToMP3 = () => {
  const [url, setUrl] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const { toast } = useToast();

  const handleConvert = async () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a YouTube URL",
        variant: "destructive",
      });
      return;
    }

    setIsConverting(true);
    try {
      // Here we would integrate with a YouTube to MP3 conversion service
      // For now, we'll just show a demo message
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Demo Mode",
        description: "This is a demo. In production, this would convert the YouTube video to MP3.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to convert video. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Youtube className="h-5 w-5 text-primary" />
        <Input
          type="url"
          placeholder="Paste YouTube URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1"
        />
      </div>
      
      <div className="flex justify-center">
        <Button
          onClick={handleConvert}
          disabled={isConverting || !url}
          className="w-full sm:w-auto"
        >
          {isConverting ? (
            <>
              <AudioWaveform className="mr-2 h-4 w-4 animate-pulse" />
              Converting...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Convert to MP3
            </>
          )}
        </Button>
      </div>
    </div>
  );
};