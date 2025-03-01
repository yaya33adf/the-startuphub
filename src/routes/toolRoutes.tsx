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
import RunwayCalculatorPage from "@/pages/tools/RunwayCalculatorPage";
import BreakEvenAnalysisPage from "@/pages/tools/BreakEvenAnalysisPage";
import InvestorReturnPage from "@/pages/tools/InvestorReturnPage";
import CrowdfundingGoalPage from "@/pages/tools/CrowdfundingGoalPage";
import StartupValuationPage from "@/pages/tools/StartupValuationPage";
import LeanCanvasGeneratorPage from "@/pages/tools/LeanCanvasGeneratorPage";
import SWOTAnalysisPage from "@/pages/tools/SWOTAnalysisPage";
import BusinessModelGeneratorPage from "@/pages/tools/BusinessModelGeneratorPage";
import CompetitorBenchmarkingPage from "@/pages/tools/CompetitorBenchmarkingPage";

export const toolRoutes = [
  {
    path: "/tools/business-name-generator",
    element: <BusinessNameGeneratorPage />
  },
  {
    path: "/tools/currency-converter",
    element: <CurrencyConverterPage />
  },
  {
    path: "/tools/startup-idea-generator",
    element: <StartupIdeaGeneratorPage />
  },
  {
    path: "/tools/sales-analytics",
    element: <SalesAnalyticsPage />
  },
  {
    path: "/tools/team-management",
    element: <TeamManagementPage />
  },
  {
    path: "/tools/email-campaign-manager",
    element: <EmailCampaignPage />
  },
  {
    path: "/tools/invoice-generator",
    element: <InvoiceGeneratorPage />
  },
  {
    path: "/tools/goal-tracker",
    element: <GoalTrackerPage />
  },
  {
    path: "/tools/appointment-scheduler",
    element: <AppointmentSchedulerPage />
  },
  {
    path: "/tools/notes",
    element: <NotesWidgetPage />
  },
  {
    path: "/tools/book-name-generator",
    element: <BookNameGeneratorPage />
  },
  {
    path: "/tools/brand-identity",
    element: <BrandIdentityPage />
  },
  {
    path: "/tools/qr-code-generator",
    element: <QRCodeGeneratorPage />
  },
  {
    path: "/tools/expense-tracker",
    element: <ExpenseTrackerPage />
  },
  {
    path: "/tools/runway-calculator",
    element: <RunwayCalculatorPage />
  },
  {
    path: "/tools/break-even-analysis",
    element: <BreakEvenAnalysisPage />
  },
  {
    path: "/tools/investor-return",
    element: <InvestorReturnPage />
  },
  {
    path: "/tools/crowdfunding-goal",
    element: <CrowdfundingGoalPage />
  },
  {
    path: "/tools/startup-valuation",
    element: <StartupValuationPage />
  },
  {
    path: "/tools/lean-canvas-generator",
    element: <LeanCanvasGeneratorPage />
  },
  {
    path: "/tools/swot-analysis",
    element: <SWOTAnalysisPage />
  },
  {
    path: "/tools/business-model-generator",
    element: <BusinessModelGeneratorPage />
  },
  {
    path: "/tools/competitor-benchmarking",
    element: <CompetitorBenchmarkingPage />
  }
];