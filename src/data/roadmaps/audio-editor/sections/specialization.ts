import { RoadmapSection } from "@/types/roadmap";

export const specializationSection: RoadmapSection = {
  title: "Specialization",
  steps: [
    {
      id: "specialized-editing",
      title: "Specialized Audio Editing",
      description: "Develop expertise in specific types of audio editing",
      status: "optional",
      skills: [
        "Podcast Editing",
        "Music Production",
        "Voice Over Editing",
        "Sound Design",
        "Audio Restoration"
      ],
      resources: [
        {
          name: "Podcast Editing Masterclass",
          url: "https://www.udemy.com/course/podcast-editing"
        },
        {
          name: "Audio Restoration Techniques",
          url: "https://www.izotope.com/en/learn/audio-restoration-tips.html"
        }
      ]
    }
  ]
};