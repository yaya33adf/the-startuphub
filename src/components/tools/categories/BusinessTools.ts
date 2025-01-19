import { 
  BookOpen, 
  DollarSign, 
  Mail, 
  FileText, 
  Lightbulb, 
  TrendingUp 
} from "lucide-react";
import { Tool } from "../types/ToolTypes";
import { BusinessNameGenerator } from "../BusinessNameGenerator";
import { CurrencyConverter } from "../CurrencyConverter";
import { EmailCampaignManager } from "../EmailCampaignManager";
import { InvoiceGenerator } from "../InvoiceGenerator";
import { StartupIdeaGenerator } from "../StartupIdeaGenerator";
import { SalesAnalytics } from "../SalesAnalytics";

export const businessTools: Tool[] = [
  {
    title: "Business Name Generator",
    description: "Generate unique business names",
    icon: BookOpen,
    component: BusinessNameGenerator,
    active: true,
    path: "/tools/business-name-generator"
  },
  {
    title: "Currency Converter",
    description: "Convert between different currencies",
    icon: DollarSign,
    component: CurrencyConverter,
    active: true,
    path: "/tools/currency-converter"
  },
  {
    title: "Email Campaign Manager",
    description: "Create and manage email campaigns",
    icon: Mail,
    component: EmailCampaignManager,
    active: true,
    path: "/tools/email-campaign-manager"
  },
  {
    title: "Invoice Generator",
    description: "Generate professional invoices",
    icon: FileText,
    component: InvoiceGenerator,
    active: true,
    path: "/tools/invoice-generator"
  },
  {
    title: "Startup Idea Generator",
    description: "Generate innovative startup ideas",
    icon: Lightbulb,
    component: StartupIdeaGenerator,
    active: true,
    path: "/tools/startup-idea-generator"
  },
  {
    title: "Sales Analytics",
    description: "Track and analyze sales data",
    icon: TrendingUp,
    component: SalesAnalytics,
    active: true,
    path: "/tools/sales-analytics"
  }
];