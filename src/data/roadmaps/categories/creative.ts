import { JobRoadmap } from "@/types/roadmap";
import { voiceoverRoadmap } from "../voiceover";
import { audioEditorRoadmap } from "../audio-editor";

export const creativeRoadmaps: Record<string, JobRoadmap> = {
  "voiceover-artist": voiceoverRoadmap,
  "audio-editor": audioEditorRoadmap
};