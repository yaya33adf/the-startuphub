import { QrCode, DollarSign, Receipt, FileSpreadsheet, BarChart3, Mail, Target, Users, CalendarDays, Shield, Palette } from "lucide-react";
import { QRCodeGenerator } from "./QRCodeGenerator";
import { CurrencyConverter } from "./CurrencyConverter";
import { InvoiceGenerator } from "./InvoiceGenerator";
import { ExpenseTracker } from "./ExpenseTracker";
import { SalesAnalytics } from "./SalesAnalytics";
import { EmailCampaignManager } from "./EmailCampaignManager";
import { GoalTracker } from "./GoalTracker";
import { TeamManagement } from "./TeamManagement";
import { AppointmentScheduler } from "./AppointmentScheduler";
import { BrandIdentityTool } from "./BrandIdentityTool";
import { BrandKitGenerator } from "./BrandKitGenerator";

export const tools = [
  {
    title: "Brand Kit Generator",
    description: "Create and manage your brand's visual identity kit",
    icon: Palette,
    component: BrandKitGenerator,
    active: true,
  },
  {
    title: "Brand Identity Tool",
    description: "Create and manage your brand's visual identity",
    icon: Shield,
    component: BrandIdentityTool,
    active: true,
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes for text or URLs",
    icon: QrCode,
    component: QRCodeGenerator,
    active: true,
  },
  {
    title: "Currency Converter",
    description: "Convert between different currencies with real-time exchange rates",
    icon: DollarSign,
    component: CurrencyConverter,
    active: true,
  },
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
  {
    title: "Goal Tracker",
    description: "Set and track business goals and KPIs",
    icon: Target,
    component: GoalTracker,
    active: true,
  },
  {
    title: "Team Management",
    description: "Manage team members and assignments",
    icon: Users,
    component: TeamManagement,
    active: true,
  },
  {
    title: "Appointment Scheduler",
    description: "Schedule and manage business appointments",
    icon: CalendarDays,
    component: AppointmentScheduler,
    active: true,
    fullWidth: true,
  },
] as const;
