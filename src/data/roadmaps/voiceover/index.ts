import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { technicalSection } from "./sections/technical";
import { performanceSection } from "./sections/performance";
import { businessSection } from "./sections/business";

export const voiceoverRoadmap: JobRoadmap = {
  title: "Voice-Over Artist",
  description: "A comprehensive guide to becoming a professional voice-over artist, covering vocal techniques, technical skills, performance abilities, and business development.",
  sections: [
    fundamentalsSection,
    technicalSection,
    performanceSection,
    businessSection
  ]
};