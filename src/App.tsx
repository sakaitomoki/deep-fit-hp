import { Switch, Route, useLocation, Router as WouterRouter } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/lib/i18n";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Schedule = lazy(() => import("@/pages/Schedule"));
const Instructors = lazy(() => import("@/pages/Instructors"));
const Kids = lazy(() => import("@/pages/Kids"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/kids" component={Kids} />
        <Route path="/instructors" component={Instructors} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ScrollToTop />
            <Navigation />
            <main className="pb-16 lg:pb-0">
              <Router />
            </main>
            <Footer />
            <MobileContactBar />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
