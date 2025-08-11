import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "@/lib/queryClient";
import Index from "./pages/Index";
import OurTeam from "./pages/OurTeam";
import TheZine from "./pages/TheZine";
import Podcast from "./pages/Podcast";
import ProgramsPage from "./pages/Programs";
import ImpactPage from "./pages/Impact";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/programs" component={ProgramsPage} />
          <Route path="/impact" component={ImpactPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/the-zine" component={TheZine} />
          <Route path="/podcast" component={Podcast} />
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
