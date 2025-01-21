import { JobRoadmap } from "@/types/roadmap";
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
  "digital-marketing": digitalMarketingRoadmap
};