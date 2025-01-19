export interface WordPressTemplate {
  id: number;
  name: string;
  description: string;
  previewImage: string;
  features: string[];
  category: string;
  themeFiles: {
    style: string;
    functions: string;
    index: string;
    header: string;
    footer: string;
    screenshot: string;
  };
  version: string;
  requires: string;
  testedUpTo: string;
  tags: string[];
}