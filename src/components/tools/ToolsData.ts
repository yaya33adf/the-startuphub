import { businessTools } from "./categories/BusinessTools";
import { productivityTools } from "./categories/ProductivityTools";
import { creativeTools } from "./categories/CreativeTools";
import { utilityTools } from "./categories/UtilityTools";
import { Tool } from "./types/ToolTypes";

// Combine all tools into a single array
export const tools: Tool[] = [
  ...businessTools,
  ...productivityTools,
  ...creativeTools,
  ...utilityTools,
];