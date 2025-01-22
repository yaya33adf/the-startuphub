import { JobRoadmap } from "@/types/roadmap";
import { htmlFundamentalsSection } from "./sections/html-fundamentals";
import { cssMasterySection } from "./sections/css-mastery";
import { javascriptEssentialsSection } from "./sections/javascript-essentials";
import { developmentToolsSection } from "./sections/development-tools";

export const frontendHtmlCssJsRoadmap: JobRoadmap = {
  title: "Frontend Developer (HTML, CSS, JavaScript) Roadmap",
  description: "A focused guide to becoming a frontend developer specializing in core web technologies",
  sections: [
    htmlFundamentalsSection,
    cssMasterySection,
    javascriptEssentialsSection,
    developmentToolsSection
  ]
};