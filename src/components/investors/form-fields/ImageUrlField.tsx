import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image } from "lucide-react";

interface ImageUrlFieldProps {
  imageUrl: string;
  onImageUrlChange: (value: string) => void;
}

export function ImageUrlField({ imageUrl, onImageUrlChange }: ImageUrlFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="imageUrl">
        <Image className="h-4 w-4 inline mr-2" />
        Image URL
      </Label>
      <Input
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => onImageUrlChange(e.target.value)}
        placeholder="Enter image URL"
      />
    </div>
  );
}