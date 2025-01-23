import { lazy } from "react";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Markets from "@/pages/Markets";
import Sitemap from "@/pages/Sitemap";
import Terms from "@/pages/Terms";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Community from "@/pages/Community";
import Problems from "@/pages/Problems";
import Events from "@/pages/Events";
import Roadmap from "@/pages/Roadmap";
import Trends from "@/pages/Trends";
import SideHustles from "@/pages/SideHustles";
import Crowdfunding from "@/pages/Crowdfunding";
import Feedback from "@/pages/Feedback";
import Team from "@/pages/Team";
import Investors from "@/pages/Investors";
import BusinessCards from "@/pages/BusinessCards";
import WordPressTemplates from "@/pages/WordPressTemplates";
import BlossomWordGame from "@/pages/BlossomWordGame";
import Startups from "@/pages/Startups";
import JobBoard from "@/pages/JobBoard";

export const mainRoutes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/job-board",
    element: <JobBoard />,
  },
  {
    path: "/startups",
    element: <Startups />,
  },
  {
    path: "/investors",
    element: <Investors />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/markets",
    element: <Markets />,
  },
  {
    path: "/trends",
    element: <Trends />,
  },
  {
    path: "/side-hustles",
    element: <SideHustles />,
  },
  {
    path: "/crowdfunding",
    element: <Crowdfunding />,
  },
  {
    path: "/roadmap",
    element: <Roadmap />,
  },
  {
    path: "/problems",
    element: <Problems />,
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/business-cards",
    element: <BusinessCards />,
  },
  {
    path: "/wordpress-templates",
    element: <WordPressTemplates />,
  },
  {
    path: "/blossom-word-game",
    element: <BlossomWordGame />,
  },
];
