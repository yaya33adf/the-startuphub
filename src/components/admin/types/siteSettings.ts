export interface LogoFile {
  file: File | null;
  previewUrl: string | null;
}

export interface LogoUploadProps {
  logoFile: LogoFile;
  isUploading: boolean;
  onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}