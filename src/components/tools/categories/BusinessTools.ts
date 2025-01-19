import { Receipt, FileSpreadsheet, BarChart3, Mail } from "lucide-react";
import { Tool } from "../types/ToolTypes";
import { InvoiceGenerator } from "../InvoiceGenerator";
import { ExpenseTracker } from "../ExpenseTracker";
import { SalesAnalytics } from "../SalesAnalytics";
import { EmailCampaignManager } from "../EmailCampaignManager";

export const businessTools: Tool[] = [
  {
    title: "Invoice Generator",
    description: "Create professional invoices for your business",
    icon: Receipt,
    component: InvoiceGenerator,
    active: true,
  },
  {
    title: "Expense Tracker",
    description: "Track and categorize your business expenses",
    icon: FileSpreadsheet,
    component: ExpenseTracker,
    active: true,
  },
  {
    title: "Sales Analytics",
    description: "Visualize and analyze your sales data",
    icon: BarChart3,
    component: SalesAnalytics,
    active: true,
    fullWidth: true,
  },
  {
    title: "Email Campaign Manager",
    description: "Create and manage email marketing campaigns",
    icon: Mail,
    component: EmailCampaignManager,
    active: true,
  },
];