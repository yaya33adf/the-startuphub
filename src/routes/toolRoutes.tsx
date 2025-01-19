import { RouteObject } from "react-router-dom";
import BusinessNameGeneratorPage from "@/pages/tools/BusinessNameGeneratorPage";
import CurrencyConverterPage from "@/pages/tools/CurrencyConverterPage";
import StartupIdeaGeneratorPage from "@/pages/tools/StartupIdeaGeneratorPage";
import SalesAnalyticsPage from "@/pages/tools/SalesAnalyticsPage";
import TeamManagementPage from "@/pages/tools/TeamManagementPage";
import EmailCampaignPage from "@/pages/tools/EmailCampaignPage";
import InvoiceGeneratorPage from "@/pages/tools/InvoiceGeneratorPage";
import GoalTrackerPage from "@/pages/tools/GoalTrackerPage";

export const toolRoutes: RouteObject[] = [
  { path: "/tools/business-name-generator", element: <BusinessNameGeneratorPage /> },
  { path: "/tools/currency-converter", element: <CurrencyConverterPage /> },
  { path: "/tools/startup-idea-generator", element: <StartupIdeaGeneratorPage /> },
  { path: "/tools/sales-analytics", element: <SalesAnalyticsPage /> },
  { path: "/tools/team-management", element: <TeamManagementPage /> },
  { path: "/tools/email-campaign-manager", element: <EmailCampaignPage /> },
  { path: "/tools/invoice-generator", element: <InvoiceGeneratorPage /> },
  { path: "/tools/goal-tracker", element: <GoalTrackerPage /> },
];