import { JobRoadmap } from "@/types/roadmap";
import { copywriterRoadmap } from "../copywriter";
import { translatorRoadmap } from "../translator";
import { voiceoverRoadmap } from "../voiceover";
import { photographerRoadmap } from "../photographer";
import { personalStylistRoadmap } from "../personal-stylist";

export const creativeRoadmaps: Record<string, JobRoadmap> = {
  "copywriter": copywriterRoadmap,
  "translator": translatorRoadmap,
  "voiceover-artist": voiceoverRoadmap,
  "professional-photographer": photographerRoadmap,
  "personal-stylist": personalStylistRoadmap,
};