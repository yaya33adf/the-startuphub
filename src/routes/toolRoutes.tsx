import { RouteObject } from "react-router-dom";
import BusinessNameGeneratorPage from "@/pages/tools/BusinessNameGeneratorPage";
import CurrencyConverterPage from "@/pages/tools/CurrencyConverterPage";
import StartupIdeaGeneratorPage from "@/pages/tools/StartupIdeaGeneratorPage";
import SalesAnalyticsPage from "@/pages/tools/SalesAnalyticsPage";
import TeamManagementPage from "@/pages/tools/TeamManagementPage";
import EmailCampaignPage from "@/pages/tools/EmailCampaignPage";
import InvoiceGeneratorPage from "@/pages/tools/InvoiceGeneratorPage";
import GoalTrackerPage from "@/pages/tools/GoalTrackerPage";
import AppointmentSchedulerPage from "@/pages/tools/AppointmentSchedulerPage";
import NotesWidgetPage from "@/pages/tools/NotesWidgetPage";
import BookNameGeneratorPage from "@/pages/tools/BookNameGeneratorPage";
import BrandIdentityPage from "@/pages/tools/BrandIdentityPage";
import QRCodeGeneratorPage from "@/pages/tools/QRCodeGeneratorPage";
import ExpenseTrackerPage from "@/pages/tools/ExpenseTrackerPage";

export const toolRoutes: RouteObject[] = [
  { path: "/tools/business-name-generator", element: <BusinessNameGeneratorPage /> },
  { path: "/tools/currency-converter", element: <CurrencyConverterPage /> },
  { path: "/tools/startup-idea-generator", element: <StartupIdeaGeneratorPage /> },
  { path: "/tools/sales-analytics", element: <SalesAnalyticsPage /> },
  { path: "/tools/team-management", element: <TeamManagementPage /> },
  { path: "/tools/email-campaign-manager", element: <EmailCampaignPage /> },
  { path: "/tools/invoice-generator", element: <InvoiceGeneratorPage /> },
  { path: "/tools/goal-tracker", element: <GoalTrackerPage /> },
  { path: "/tools/appointment-scheduler", element: <AppointmentSchedulerPage /> },
  { path: "/tools/notes", element: <NotesWidgetPage /> },
  { path: "/tools/book-name-generator", element: <BookNameGeneratorPage /> },
  { path: "/tools/brand-identity", element: <BrandIdentityPage /> },
  { path: "/tools/qr-code-generator", element: <QRCodeGeneratorPage /> },
  { path: "/tools/expense-tracker", element: <ExpenseTrackerPage /> }
];