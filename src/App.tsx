import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { NavigationMenu } from "@/components/NavigationMenu";
import Footer from "@/components/Footer";

// Import existing pages
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import Community from "@/pages/Community";
import Contact from "@/pages/Contact";
import Crowdfunding from "@/pages/Crowdfunding";
import FAQ from "@/pages/FAQ";
import Feedback from "@/pages/Feedback";
import Markets from "@/pages/Markets";
import SideHustles from "@/pages/SideHustles";
import Sitemap from "@/pages/Sitemap";
import Startups from "@/pages/Startups";
import Team from "@/pages/Team";
import Tools from "@/pages/Tools";
import Trends from "@/pages/Trends";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ProfileSettings from "@/pages/auth/ProfileSettings";
import Dashboard from "@/pages/admin/Dashboard";
import ProtectedAdminRoute from "@/components/auth/ProtectedAdminRoute";

// Import new pages
import About from "@/pages/About";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

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
              <Route path="/community" element={<Community />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/crowdfunding" element={<Crowdfunding />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/markets" element={<Markets />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/side-hustles" element={<SideHustles />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/startups" element={<Startups />} />
              <Route path="/team" element={<Team />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/auth/signin" element={<SignIn />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />
              <Route path="/auth/profile" element={<ProfileSettings />} />
              <Route
                path="/admin/*"
                element={
                  <ProtectedAdminRoute>
                    <Dashboard />
                  </ProtectedAdminRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;