import { RouteObject } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Markets from "@/pages/Markets";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import SideHustles from "@/pages/SideHustles";
import Sitemap from "@/pages/Sitemap";
import Team from "@/pages/Team";
import Terms from "@/pages/Terms";
import Tools from "@/pages/Tools";
import Trends from "@/pages/Trends";
import Community from "@/pages/Community";
import Crowdfunding from "@/pages/Crowdfunding";
import Feedback from "@/pages/Feedback";
import Investors from "@/pages/Investors";
import ScheduleCall from "@/pages/ScheduleCall";
import Startups from "@/pages/Startups";
import BusinessCards from "@/pages/BusinessCards";
import WordPressTemplates from "@/pages/WordPressTemplates";

export const mainRoutes: RouteObject[] = [
  { path: "/", element: <Index /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/markets", element: <Markets /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/side-hustles", element: <SideHustles /> },
  { path: "/sitemap", element: <Sitemap /> },
  { path: "/team", element: <Team /> },
  { path: "/terms", element: <Terms /> },
  { path: "/tools", element: <Tools /> },
  { path: "/trends", element: <Trends /> },
  { path: "/community", element: <Community /> },
  { path: "/crowdfunding", element: <Crowdfunding /> },
  { path: "/feedback", element: <Feedback /> },
  { path: "/investors", element: <Investors /> },
  { path: "/schedule-call", element: <ScheduleCall /> },
  { path: "/startups", element: <Startups /> },
  { path: "/business-cards", element: <BusinessCards /> },
  { path: "/wordpress-templates", element: <WordPressTemplates /> },
];