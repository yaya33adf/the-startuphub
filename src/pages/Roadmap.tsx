import { PageSEO } from "@/components/seo/PageSEO";
import { RoadmapCategories } from "@/components/roadmap/RoadmapCategories";
import { JobCategory } from "@/types/roadmap";

const jobCategories: JobCategory[] = [
  {
    title: "Web Development & IT",
    roles: [
      "Front-End Developer (HTML, CSS, JavaScript)",
      "Back-End Developer (Node.js, PHP, Python)",
      "Full-Stack Developer",
      "WordPress Developer",
      "Shopify Developer",
      "App Developer (iOS/Android)",
      "UX/UI Designer",
      "Web Designer",
      "Software Engineer",
      "Database Administrator",
      "DevOps Engineer",
      "Cybersecurity Specialist",
      "QA Tester"
    ]
  },
  {
    title: "Digital Marketing",
    roles: [
      "SEO Specialist",
      "Social Media Manager",
      "Content Marketer",
      "Email Marketing Expert",
      "PPC Specialist (Google Ads, Facebook Ads)",
      "Affiliate Marketing Manager",
      "Growth Hacker",
      "Influencer Marketing Manager",
      "Marketing Automation Specialist",
      "Conversion Rate Optimization (CRO) Specialist"
    ]
  },
  {
    title: "Writing & Content Creation",
    roles: [
      "Copywriter",
      "Blog Writer",
      "Technical Writer",
      "Grant Writer",
      "Creative Writer",
      "Ghostwriter",
      "Resume Writer",
      "Scriptwriter (for YouTube, podcasts, etc.)",
      "eBook Writer",
      "Proofreader/Editor",
      "Academic Writer"
    ]
  },
  {
    title: "Graphic Design & Multimedia",
    roles: [
      "Logo Designer",
      "Brand Identity Designer",
      "Infographic Designer",
      "UI/UX Designer",
      "Presentation Designer (PowerPoint, Google Slides)",
      "Motion Graphics Designer",
      "3D Modeler",
      "Animation Expert",
      "Video Editor",
      "Illustrator",
      "Photoshop Expert",
      "Print Designer (Flyers, Brochures, Business Cards)"
    ]
  },
  {
    title: "Business & Consulting",
    roles: [
      "Business Plan Writer",
      "Financial Consultant",
      "Market Research Analyst",
      "Startup Advisor",
      "Business Development Consultant",
      "Legal Consultant",
      "HR Consultant",
      "Tax Consultant",
      "Business Coach"
    ]
  },
  {
    title: "E-Commerce & Online Sales",
    roles: [
      "Amazon FBA Specialist",
      "Shopify Specialist",
      "E-commerce Store Manager",
      "Dropshipping Expert",
      "Product Listing Specialist",
      "Customer Support Representative",
      "Inventory Management Specialist",
      "Payment Processing Consultant"
    ]
  },
  {
    title: "Virtual Assistance & Administration",
    roles: [
      "Virtual Assistant",
      "Data Entry Specialist",
      "Administrative Support",
      "Project Manager",
      "Customer Service Representative",
      "Personal Assistant",
      "Research Assistant",
      "Calendar & Email Management",
      "CRM Management Specialist"
    ]
  },
  {
    title: "Finance & Accounting",
    roles: [
      "Bookkeeper",
      "Accountant",
      "Financial Analyst",
      "Tax Preparer",
      "Payroll Specialist",
      "QuickBooks Specialist",
      "Financial Planning Consultant"
    ]
  },
  {
    title: "Translation & Language Services",
    roles: [
      "Translator (multiple languages)",
      "Transcriptionist",
      "Subtitling & Captioning Specialist",
      "Language Tutor",
      "Proofreading & Editing (bilingual)",
      "Localization Specialist"
    ]
  },
  {
    title: "Audio & Music Services",
    roles: [
      "Voiceover Artist",
      "Sound Designer",
      "Music Producer",
      "Podcast Editor",
      "Audio Engineer",
      "Jingle Composer",
      "Mixing and Mastering Specialist"
    ]
  },
  {
    title: "Photography & Videography",
    roles: [
      "Professional Photographer",
      "Videographer",
      "Photo Retoucher",
      "Drone Photographer/Videographer",
      "Event Photographer"
    ]
  },
  {
    title: "Sales & Lead Generation",
    roles: [
      "Lead Generation Specialist",
      "Sales Funnel Expert",
      "Cold Calling Specialist",
      "B2B Sales Consultant",
      "CRM Specialist (Salesforce, HubSpot)",
      "Telemarketer"
    ]
  },
  {
    title: "Career Coaching & Training",
    roles: [
      "Career Coach",
      "Life Coach",
      "Resume & LinkedIn Profile Consultant",
      "Interview Coach",
      "Online Course Creator"
    ]
  },
  {
    title: "Healthcare & Wellness",
    roles: [
      "Online Fitness Coach",
      "Nutritionist/Dietitian",
      "Mental Health Consultant",
      "Medical Writer",
      "Telehealth Consultant"
    ]
  },
  {
    title: "Game Development",
    roles: [
      "Game Designer",
      "Unity Developer",
      "Unreal Engine Developer",
      "Game Tester",
      "2D/3D Game Artist",
      "Game Story Writer"
    ]
  },
  {
    title: "Data Science & AI",
    roles: [
      "Data Analyst",
      "Machine Learning Engineer",
      "AI Consultant",
      "Data Visualization Specialist",
      "Big Data Engineer",
      "Chatbot Developer"
    ]
  },
  {
    title: "Real Estate Services",
    roles: [
      "Real Estate Virtual Assistant",
      "Property Listing Manager",
      "Real Estate Marketing Specialist",
      "Mortgage Advisor",
      "Property Investment Consultant"
    ]
  },
  {
    title: "Legal & Compliance",
    roles: [
      "Contract Law Specialist",
      "Intellectual Property Consultant",
      "Corporate Lawyer",
      "GDPR & Privacy Policy Consultant",
      "Paralegal Services"
    ]
  },
  {
    title: "Engineering & Architecture",
    roles: [
      "CAD Designer",
      "Civil Engineer",
      "Mechanical Engineer",
      "Electrical Engineer",
      "Structural Engineer",
      "Interior Designer",
      "Landscape Architect"
    ]
  },
  {
    title: "Personal & Lifestyle Services",
    roles: [
      "Travel Planner",
      "Personal Shopper",
      "Event Planner",
      "Relationship Coach",
      "Home Organizer"
    ]
  }
];

const Roadmap = () => {
  return (
    <div className="container py-8">
      <PageSEO 
        title="Career Roadmap" 
        description="Explore freelancer career paths and development roadmaps"
      />
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Freelancer Career Roadmaps
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Discover various career paths and skills needed to succeed as a freelancer
        </p>
        
        <RoadmapCategories categories={jobCategories} />
      </div>
    </div>
  );
};

export default Roadmap;
