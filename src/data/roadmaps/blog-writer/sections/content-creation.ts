import { RoadmapSection } from "@/types/roadmap";

export const contentCreationSection: RoadmapSection = {
  title: "3. Content Creation",
  steps: [
    {
      id: "writing-formats",
      title: "Writing Formats",
      description: "Master different blog writing formats",
      status: "required",
      skills: [
        "How-to Guides",
        "Listicles",
        "Case Studies",
        "Interviews",
        "Product Reviews"
      ],
      resources: [
        {
          name: "Content Marketing Institute",
          url: "https://contentmarketinginstitute.com/blog/"
        }
      ]
    },
    {
      id: "multimedia-content",
      title: "Multimedia Integration",
      description: "Learn to enhance blog posts with multimedia",
      status: "recommended",
      skills: [
        "Image Selection",
        "Infographic Creation",
        "Video Integration",
        "Audio Content",
        "Interactive Elements"
      ],
      resources: [
        {
          name: "Canva Design School",
          url: "https://www.canva.com/learn/"
        }
      ]
    }
  ]
};