import { Tool } from "./types/ToolTypes";
import { businessTools } from "./categories/BusinessTools";
import { productivityTools } from "./categories/ProductivityTools";
import { creativeTools } from "./categories/CreativeTools";
import { utilityTools } from "./categories/UtilityTools";
import { financialTools } from "./categories/FinancialTools";
import { customerExperienceTools } from "./categories/CustomerExperienceTools";
import { operationsTools } from "./categories/OperationsTools";

export const tools: Tool[] = [
  ...businessTools,
  ...productivityTools,
  ...creativeTools,
  ...utilityTools,
  ...financialTools,
  ...customerExperienceTools,
  ...operationsTools
];