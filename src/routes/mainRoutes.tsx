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

export const mainRoutes = [
  {
    path: "/",
    element: <Index />,
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
    path: "/problems",
    element: <Problems />,
  },
];