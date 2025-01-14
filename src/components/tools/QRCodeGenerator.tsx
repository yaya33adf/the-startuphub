import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const { toast } = useToast();

  const handleDownload = () => {
    if (!text) {
      toast({
        title: "Error",
        description: "Please enter some text first",
        variant: "destructive",
      });
      return;
    }

    const svg = document.querySelector("#qr-code svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      
      const downloadLink = document.createElement("a");
      downloadLink.download = "qr-code.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>QR Code Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Enter text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex justify-center p-4 bg-white rounded-lg" id="qr-code">
          <QRCodeSVG
            value={text || "https://example.com"}
            size={200}
            level="H"
            includeMargin
            className="mx-auto"
          />
        </div>
        <Button
          onClick={handleDownload}
          className="w-full"
          disabled={!text}
        >
          <Download className="mr-2" />
          Download QR Code
        </Button>
      </CardContent>
    </Card>
  );
};