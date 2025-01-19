import { BarChart3, Calculator, CreditCard, DollarSign, FileSpreadsheet, Target } from "lucide-react";
import { Tool } from "../types/ToolTypes";
import { BusinessNameGenerator } from "../BusinessNameGenerator";
import { CurrencyConverter } from "../CurrencyConverter";
import { ExpenseTracker } from "../ExpenseTracker";
import { InvoiceGenerator } from "../InvoiceGenerator";
import { SalesAnalytics } from "../SalesAnalytics";

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
  }
];