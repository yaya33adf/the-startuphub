import { RoadmapSection } from "@/types/roadmap";

export const technicalSection: RoadmapSection = {
  title: "Technical Skills",
  steps: [
    {
      id: "audio-processing",
      title: "Audio Processing",
      description: "Learn essential audio processing techniques and effects",
      status: "required",
      skills: [
        "EQ",
        "Compression",
        "Noise Reduction",
        "Reverb",
        "Normalization"
      ],
      resources: [
        {
          name: "Audio Processing Fundamentals",
          url: "https://www.soundonsound.com/techniques/audio-processing"
        },
        {
          name: "Mastering Audio Effects",
          url: "https://www.masterclass.com/articles/audio-effects-guide"
        }
      ]
    },
    {
      id: "mixing-mastering",
      title: "Mixing and Mastering",
      description: "Develop skills in mixing multiple audio tracks and mastering final output",
      status: "required",
      skills: [
        "Level Balancing",
        "Stereo Imaging",
        "Dynamic Range",
        "Loudness Standards",
        "Final Output Formats"
      ],
      resources: [
        {
          name: "Mixing and Mastering Guide",
          url: "https://www.izotope.com/en/learn/guides/mixing-and-mastering.html"
        }
      ]
    }
  ]
};