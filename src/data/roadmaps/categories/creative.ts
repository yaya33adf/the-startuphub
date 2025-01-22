import { JobRoadmap } from "@/types/roadmap";
import { voiceoverRoadmap } from "../voiceover";
import { audioEditorRoadmap } from "../audio-editor";
import { personalStylistRoadmap } from "../personal-stylist";

export const creativeRoadmaps: Record<string, JobRoadmap> = {
  "voiceover-artist": voiceoverRoadmap,
  "audio-editor": audioEditorRoadmap,
  "personal-stylist": personalStylistRoadmap
};