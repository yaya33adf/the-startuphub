import { QrCode, DollarSign, Receipt, FileSpreadsheet, BarChart3, Mail, Target, Users, CalendarDays, Shield, Lightbulb, BookOpen } from "lucide-react";
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
import { BusinessNameGenerator } from "./BusinessNameGenerator";
import { BookNameGenerator } from "./BookNameGenerator";
import { PasswordGenerator } from "./PasswordGenerator";

export const tools = [
  {
    title: "Password Generator",
    description: "Generate secure passwords with customizable options",
    icon: Shield,
    component: PasswordGenerator,
    active: true,
  },
  {
    title: "Book Name Generator",
    description: "Generate creative book titles based on genres and keywords",
    icon: BookOpen,
    component: BookNameGenerator,
    active: true,
  },
  {
    title: "Business Name Generator",
    description: "Generate creative and unique business names based on your industry and keywords",
    icon: Lightbulb,
    component: BusinessNameGenerator,
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
