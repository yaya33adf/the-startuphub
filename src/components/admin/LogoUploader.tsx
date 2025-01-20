import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Loader2 } from "lucide-react";
import type { LogoUploadProps } from "./types/siteSettings";

export const LogoUploader = ({ logoFile, isUploading, onLogoUpload }: LogoUploadProps) => {
  return (
    <div>
      <Label htmlFor="logo">Site Logo</Label>
      <div className="mt-2 space-y-4">
        {logoFile.previewUrl && (
          <div className="w-20 h-20 rounded-lg border overflow-hidden">
            <img 
              src={logoFile.previewUrl} 
              alt="Current logo" 
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <Button
          variant="outline"
          onClick={() => document.getElementById('logo-upload')?.click()}
          className="w-full"
          disabled={isUploading}
        >
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload Logo
            </>
          )}
        </Button>
        <Input
          id="logo-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onLogoUpload}
          disabled={isUploading}
        />
      </div>
      {logoFile.file && (
        <p className="text-sm text-muted-foreground mt-2">
          Selected: {logoFile.file.name}
        </p>
      )}
    </div>
  );
};