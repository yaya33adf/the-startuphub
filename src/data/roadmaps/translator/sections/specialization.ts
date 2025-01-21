import { RoadmapSection } from "@/types/roadmap";

export const specializationSection: RoadmapSection = {
  title: "Language-Specific Specialization",
  steps: [
    {
      id: "spec-1",
      title: "Choose Language Pairs and Domains",
      description: "Specialize in specific language pairs and domains (legal, medical, technical, literary). Develop expertise in terminology for each language combination and field.",
      status: "recommended",
      skills: ["Domain Expertise", "Specialized Terminology", "Research Skills", "Language-Specific Knowledge"],
      resources: [
        {
          name: "TranslatorsCafe Specializations",
          url: "https://www.translatorscafe.com"
        },
        {
          name: "IAPTI - International Association of Professional Translators",
          url: "https://www.iapti.org"
        }
      ]
    },
    {
      id: "spec-2",
      title: "Certification for Multiple Languages",
      description: "Obtain relevant certifications for each language pair from recognized translation organizations to validate your expertise and increase credibility.",
      status: "recommended",
      skills: ["Professional Certification", "Industry Standards", "Language-Specific Qualifications"],
      resources: [
        {
          name: "American Translators Association",
          url: "https://www.atanet.org"
        },
        {
          name: "International Federation of Translators",
          url: "https://fit-ift.org"
        }
      ]
    }
  ]
};