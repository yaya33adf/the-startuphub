import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { NavigationMenu } from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "@/pages/NotFound";
import { mainRoutes } from "@/routes/mainRoutes";
import { authRoutes } from "@/routes/authRoutes";
import { toolRoutes } from "@/routes/toolRoutes";
import { adminRoutes } from "@/routes/adminRoutes";
import { JobRoadmap } from "@/components/roadmap/JobRoadmap";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <NavigationMenu />
          <main className="flex-grow">
            <Routes>
              {mainRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
              {authRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
              {toolRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
              {adminRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
              <Route path="/roadmap/:jobId" element={<JobRoadmap />} />
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