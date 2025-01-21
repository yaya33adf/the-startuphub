import { RoadmapSection } from "@/types/roadmap";

export const technical: RoadmapSection = {
  title: "Technical Skills",
  steps: [
    {
      id: "post-processing",
      title: "Post-Processing",
      description: "Learn digital image editing and enhancement techniques",
      skills: ["Adobe Lightroom", "Adobe Photoshop", "Color correction", "RAW processing"],
      status: "required",
      resources: [
        {
          name: "Post-Processing Fundamentals",
          url: "https://www.adobe.com/creativecloud/photography/discover/photo-editing-basics"
        }
      ]
    },
    {
      id: "equipment",
      title: "Photography Equipment",
      description: "Understanding and using various photography equipment",
      skills: ["Lenses", "Tripods", "Filters", "Lighting equipment"],
      status: "required",
      resources: [
        {
          name: "Essential Photography Equipment",
          url: "https://www.photoworkout.com/essential-photography-equipment/"
        }
      ]
    },
    {
      id: "file-management",
      title: "Digital Asset Management",
      description: "Organize and manage your digital photo library",
      skills: ["File organization", "Backup systems", "Metadata", "Keywords"],
      status: "recommended",
      resources: [
        {
          name: "Photo Management Guide",
          url: "https://www.digitalphotomentor.com/photo-management-guide/"
        }
      ]
    }
  ]
};