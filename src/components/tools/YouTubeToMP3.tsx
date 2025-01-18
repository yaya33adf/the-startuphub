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
    toast({
      title: "Converting",
      description: "This may take a few minutes for longer videos...",
    });

    try {
      console.log("Starting conversion for URL:", url);
      
      const { data, error } = await supabase.functions.invoke('youtube-to-mp3', {
        body: { url }
      });

      console.log("Conversion response:", data);

      if (error) {
        console.error("Supabase function error:", error);
        throw new Error(error.message || "Failed to convert video");
      }

      if (!data || !data.downloadUrl) {
        throw new Error("Invalid response from conversion service");
      }

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
    } catch (error) {
      console.error("Conversion error:", error);
      
      // Extract error message from various possible formats
      let errorMessage = "Failed to convert video. Please try a shorter video or try again later.";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'object' && error !== null) {
        // @ts-ignore
        errorMessage = error.message || error.error || errorMessage;
      }

      toast({
        title: "Error",
        description: errorMessage,
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