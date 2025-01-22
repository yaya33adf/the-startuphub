import { RoadmapSection } from "@/types/roadmap";

export const technicalSection: RoadmapSection = {
  title: "Technical Skills",
  steps: [
    {
      id: "recording-equipment",
      title: "Recording Equipment",
      description: "Learn about essential recording equipment and setup",
      skills: ["Microphone selection", "Audio interface usage", "Studio setup", "Acoustic treatment"],
      status: "required",
      resources: [
        {
          name: "Home Studio Setup Guide",
          url: "https://www.voices.com/blog/home-recording-studio-setup/"
        }
      ]
    },
    {
      id: "audio-software",
      title: "Audio Software & DAWs",
      description: "Master audio recording and editing software",
      skills: ["DAW proficiency", "Audio editing", "Noise reduction", "File management"],
      status: "required",
      resources: [
        {
          name: "Audio Editing Basics",
          url: "https://www.soundonsound.com/techniques/audio-editing-basics"
        }
      ]
    },
    {
      id: "audio-processing",
      title: "Audio Processing & Effects",
      description: "Understanding audio processing and effects for voice over",
      skills: ["EQ", "Compression", "De-essing", "Noise gate"],
      status: "recommended"
    }
  ]
};