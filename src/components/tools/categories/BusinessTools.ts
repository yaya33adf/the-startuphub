import { FileSpreadsheet, Calculator, CreditCard, DollarSign, BarChart3, Quote, Lightbulb, Layout } from "lucide-react";
import { Tool } from "../types/ToolTypes";
import { BusinessNameGenerator } from "../BusinessNameGenerator";
import { CurrencyConverter } from "../CurrencyConverter";
import { ExpenseTracker } from "../ExpenseTracker";
import { InvoiceGenerator } from "../InvoiceGenerator";
import { SalesAnalytics } from "../SalesAnalytics";
import { SmallBusinessQuotes } from "../SmallBusinessQuotes";
import { SmallBusinessTips } from "../SmallBusinessTips";
import { LeanCanvasGenerator } from "../LeanCanvasGenerator";

export const businessTools: Tool[] = [
  {
    title: "Business Name Generator",
    description: "Generate unique business names",
    icon: FileSpreadsheet,
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
    title: "Expense Tracker",
    description: "Track business expenses",
    icon: Calculator,
    component: ExpenseTracker,
    active: true,
    path: "/tools/expense-tracker"
  },
  {
    title: "Invoice Generator",
    description: "Create professional invoices",
    icon: CreditCard,
    component: InvoiceGenerator,
    active: true,
    path: "/tools/invoice-generator"
  },
  {
    title: "Sales Analytics",
    description: "Analyze sales performance",
    icon: BarChart3,
    component: SalesAnalytics,
    active: true,
    path: "/tools/sales-analytics"
  },
  {
    title: "Small Business Quotes",
    description: "Generate inspirational quotes for small businesses",
    icon: Quote,
    component: SmallBusinessQuotes,
    active: true,
    path: "/tools/small-business-quotes"
  },
  {
    title: "Small Business Tips",
    description: "Generate practical tips for small businesses",
    icon: Lightbulb,
    component: SmallBusinessTips,
    active: true,
    path: "/tools/small-business-tips"
  },
  {
    title: "Lean Canvas Generator",
    description: "Create a one-page business plan efficiently",
    icon: Layout,
    component: LeanCanvasGenerator,
    active: true,
    path: "/tools/lean-canvas-generator"
  }
];