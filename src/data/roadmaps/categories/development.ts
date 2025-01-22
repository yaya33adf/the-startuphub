import { JobRoadmap } from "@/types/roadmap";
import { frontendRoadmap } from "../frontend";
import { backendRoadmap } from "../backend";
import { fullStackRoadmap } from "../full-stack";
import { web3Roadmap } from "../web3";
import { wordpressRoadmap } from "../wordpress";
import { shopifyRoadmap } from "../shopify";
import { mobileRoadmap } from "../mobile";
import { frontendHtmlCssJsRoadmap } from "../frontend-html-css-js";

export const developmentRoadmaps: Record<string, JobRoadmap> = {
  "frontend-developer": frontendRoadmap,
  "frontend-developer-html-css-javascript": frontendHtmlCssJsRoadmap,
  "backend-developer": backendRoadmap,
  "full-stack-developer": fullStackRoadmap,
  "web3-developer": web3Roadmap,
  "wordpress-developer": wordpressRoadmap,
  "shopify-developer": shopifyRoadmap,
  "mobile-developer": mobileRoadmap,
};