import { WordPressTemplate } from "./types";

export const templates: WordPressTemplate[] = [
  {
    id: 1,
    name: "TechLaunch Pro",
    description: "Modern and minimalist template perfect for SaaS startups",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    features: ["Responsive Design", "WooCommerce Ready", "SEO Optimized", "Custom Widgets"],
    category: "SaaS"
  },
  {
    id: 2,
    name: "Innovation Hub",
    description: "Feature-rich template for tech innovation companies",
    previewImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    features: ["Page Builder", "Portfolio Layouts", "Blog Templates", "Analytics Integration"],
    category: "Technology"
  },
  {
    id: 3,
    name: "StartupX",
    description: "Clean and professional template for digital startups",
    previewImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    features: ["Fast Loading", "Multiple Headers", "Contact Forms", "Team Showcase"],
    category: "Digital"
  },
];