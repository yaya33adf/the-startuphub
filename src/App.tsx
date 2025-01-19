import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { NavigationMenu } from "@/components/NavigationMenu";
import { Footer } from "@/components/Footer";
import { HelmetProvider } from "react-helmet-async";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Markets from "@/pages/Markets";
import NotFound from "@/pages/NotFound";
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

// Auth pages
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ProfileSettings from "@/pages/auth/ProfileSettings";

// Admin pages
import Dashboard from "@/pages/admin/Dashboard";
import { ProtectedAdminRoute } from "@/components/auth/ProtectedAdminRoute";

import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <NavigationMenu />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/markets" element={<Markets />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/side-hustles" element={<SideHustles />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/team" element={<Team />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/community" element={<Community />} />
              <Route path="/crowdfunding" element={<Crowdfunding />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/schedule-call" element={<ScheduleCall />} />
              <Route path="/startups" element={<Startups />} />
              <Route path="/business-cards" element={<BusinessCards />} />
              <Route path="/wordpress-templates" element={<WordPressTemplates />} />

              {/* Auth routes */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile-settings" element={<ProfileSettings />} />

              {/* Admin routes */}
              <Route
                path="/admin/*"
                element={
                  <ProtectedAdminRoute>
                    <Dashboard />
                  </ProtectedAdminRoute>
                }
              />

              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </Router>
    </HelmetProvider>
  );
}

export default App;