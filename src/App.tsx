import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import About from "./pages/About";
import Search from "./pages/Search";
import Insights from "./pages/Insights";
import Demographics from "./pages/Demographics";
import Chat from "./pages/Chat";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";
import { Tag, Map, TrendingUp, Target } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full gradient-background">
            {/* Global Sidebar */}
            <AppSidebar />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Header with Sidebar Toggle */}
              <header className="h-16 border-b border-border/50 bg-card/50 backdrop-blur-sm flex items-center px-6">
                <SidebarTrigger className="mr-4" />
                <div className="flex-1" />
              </header>
              
              {/* Page Content */}
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/insights" element={<Insights />} />
                  <Route path="/demographics" element={<Demographics />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route 
                    path="/taste" 
                    element={
                      <PlaceholderPage
                        title="Taste Analysis"
                        description="Analyze audience preferences and content tags"
                        icon={Tag}
                        features={[
                          "Word cloud visualization",
                          "Tag popularity trends",
                          "Content category breakdown",
                          "Preference correlation analysis"
                        ]}
                      />
                    } 
                  />
                  <Route 
                    path="/location" 
                    element={
                      <PlaceholderPage
                        title="Location Trends"
                        description="Interactive maps showing audience geographic distribution"
                        icon={Map}
                        features={[
                          "Interactive world map",
                          "Regional audience heatmaps",
                          "City-level engagement data",
                          "Geographic trend analysis"
                        ]}
                      />
                    } 
                  />
                  <Route 
                    path="/heatmap" 
                    element={
                      <PlaceholderPage
                        title="Heatmap View"
                        description="Visualize trending content and engagement patterns"
                        icon={TrendingUp}
                        features={[
                          "Content trend heatmaps",
                          "Engagement intensity mapping",
                          "Time-based trend analysis",
                          "Cross-platform comparisons"
                        ]}
                      />
                    } 
                  />
                  <Route 
                    path="/recommendations" 
                    element={
                      <PlaceholderPage
                        title="Recommendation Engine"
                        description="AI-powered suggestions for content and collaborations"
                        icon={Target}
                        features={[
                          "Similar creator recommendations",
                          "Collaboration opportunities",
                          "Content strategy suggestions",
                          "Audience overlap analysis"
                        ]}
                      />
                    } 
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
