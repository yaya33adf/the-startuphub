import { JobRoadmap } from "@/types/roadmap";
import { frontendRoadmap } from "../frontend";
import { backendRoadmap } from "../backend";
import { fullStackRoadmap } from "../full-stack";
import { web3Roadmap } from "../web3";
import { wordpressRoadmap } from "../wordpress";
import { shopifyRoadmap } from "../shopify";
import { mobileRoadmap } from "../mobile";

export const developmentRoadmaps: Record<string, JobRoadmap> = {
  "frontend-developer": frontendRoadmap,
  "backend-developer": backendRoadmap,
  "full-stack-developer": fullStackRoadmap,
  "web3-developer": web3Roadmap,
  "wordpress-developer": wordpressRoadmap,
  "shopify-developer": shopifyRoadmap,
  "mobile-developer": mobileRoadmap,
};