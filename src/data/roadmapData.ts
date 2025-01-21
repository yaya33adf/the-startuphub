import type { JobRoadmap } from '@/types/roadmap';
import { frontendRoadmap } from "./roadmaps/frontend";
import { backendRoadmap } from "./roadmaps/backend";
import { uiuxRoadmap } from "./roadmaps/uiux";
import { dataScienceRoadmap } from "./roadmaps/data-science";
import { devopsRoadmap } from "./roadmaps/devops";
import { mobileRoadmap } from "./roadmaps/mobile";
import { cybersecurityRoadmap } from "./roadmaps/cybersecurity";
import { wordpressRoadmap } from "./roadmaps/wordpress";
import { shopifyRoadmap } from "./roadmaps/shopify";
import { digitalMarketingRoadmap } from "./roadmaps/digital-marketing";
import { fullStackRoadmap } from "./roadmaps/full-stack";
import { web3Roadmap } from "./roadmaps/web3";
import { seoRoadmap } from "./roadmaps/seo";
import { copywriterRoadmap } from "./roadmaps/copywriter";
import { logoDesignerRoadmap } from "./roadmaps/logo-designer";
import { businessPlanWriterRoadmap } from "./roadmaps/business-plan-writer";
import { amazonFbaRoadmap } from "./roadmaps/amazon-fba";
import { virtualAssistantRoadmap } from "./roadmaps/virtual-assistant";
import { bookkeeperRoadmap } from "./roadmaps/bookkeeper";
import { translatorRoadmap } from "./roadmaps/translator";
import { voiceoverRoadmap } from "./roadmaps/voiceover";

export const roadmaps: Record<string, JobRoadmap> = {
  "frontend-developer": frontendRoadmap,
  "backend-developer": backendRoadmap,
  "full-stack-developer": fullStackRoadmap,
  "web3-developer": web3Roadmap,
  "uxui-designer": uiuxRoadmap,
  "data-scientist": dataScienceRoadmap,
  "devops-engineer": devopsRoadmap,
  "mobile-developer": mobileRoadmap,
  "cybersecurity-analyst": cybersecurityRoadmap,
  "wordpress-developer": wordpressRoadmap,
  "shopify-developer": shopifyRoadmap,
  "digital-marketing": digitalMarketingRoadmap,
  "voiceover-artist": voiceoverRoadmap,
  "seo-specialist": seoRoadmap,
  "copywriter": copywriterRoadmap,
  "logo-designer": logoDesignerRoadmap,
  "business-plan-writer": businessPlanWriterRoadmap,
  "amazon-fba-specialist": amazonFbaRoadmap,
  "virtual-assistant": virtualAssistantRoadmap,
  "bookkeeper": bookkeeperRoadmap,
  "translator": translatorRoadmap
};
