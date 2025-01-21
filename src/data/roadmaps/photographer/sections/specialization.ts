import { RoadmapSection } from "@/types/roadmap";

export const specialization: RoadmapSection = {
  title: "Photography Specializations",
  steps: [
    {
      id: "portrait",
      title: "Portrait Photography",
      description: "Master the art of capturing compelling portraits",
      skills: ["Posing techniques", "Environmental portraits", "Studio portraits", "Lighting setups"],
      status: "recommended",
      resources: [
        {
          name: "Portrait Photography Guide",
          url: "https://www.portraitphotographyschool.com/guide/"
        }
      ]
    },
    {
      id: "commercial",
      title: "Commercial Photography",
      description: "Learn product and commercial photography techniques",
      skills: ["Product photography", "Brand storytelling", "Commercial lighting", "Set design"],
      status: "optional",
      resources: [
        {
          name: "Commercial Photography Basics",
          url: "https://www.masterclass.com/articles/commercial-photography-guide"
        }
      ]
    },
    {
      id: "wedding",
      title: "Wedding Photography",
      description: "Develop skills for wedding and event photography",
      skills: ["Event coverage", "Candid photography", "Timeline management", "Group photos"],
      status: "optional",
      resources: [
        {
          name: "Wedding Photography Tips",
          url: "https://www.shopmoment.com/wedding-photography-guide"
        }
      ]
    }
  ]
};