import { useState } from "react";
import { Youtube, Download, AudioWaveform } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
      console.log("Starting conversion for URL:", url);
      
      const { data, error } = await supabase.functions.invoke('youtube-to-mp3', {
        body: { url }
      });

      if (error) throw error;

      console.log("Conversion response:", data);

      if (data.downloadUrl) {
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = data.downloadUrl;
        link.target = '_blank';
        link.download = `${data.title || 'youtube-audio'}.mp3`;
        
        // Append to document, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast({
          title: "Success",
          description: "Your download should begin shortly.",
        });
      }
    } catch (error) {
      console.error("Conversion error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to convert video. Please try again.",
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