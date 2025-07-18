
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";

// Auth
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./components/layout/AdminLayout";

// Student Management
import Students from "./pages/students/Students";
import StudentNew from "./pages/students/StudentNew";
import StudentSearch from "./pages/students/StudentSearch";

// Fee Management
import Fees from "./pages/fees/Fees";
import FeesAdd from "./pages/fees/FeesAdd";
import FeesHistory from "./pages/fees/FeesHistory";
import FeesPending from "./pages/fees/FeesPending";

// Course Management
import Courses from "./pages/courses/Courses";

// Trainer Management
import Trainers from "./pages/trainers/Trainers";

// Batch Management
import Batches from "./pages/batches/Batches";

// Reports
import Reports from "./pages/reports/Reports";

// Settings
import Settings from "./pages/settings/Settings";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/login" 
              element={<Login onLogin={() => setIsAuthenticated(true)} />} 
            />
            
            {isAuthenticated ? (
              <Route path="/" element={
                <SidebarProvider>
                  <AdminLayout />
                </SidebarProvider>
              }>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                
                {/* Student Routes */}
                <Route path="students" element={<Students />} />
                <Route path="students/new" element={<StudentNew />} />
                <Route path="students/search" element={<StudentSearch />} />
                
                {/* Fee Routes */}
                <Route path="fees" element={<Fees />} />
                <Route path="fees/add" element={<FeesAdd />} />
                <Route path="fees/history" element={<FeesHistory />} />
                <Route path="fees/pending" element={<FeesPending />} />
                
                {/* Course Routes */}
                <Route path="courses" element={<Courses />} />
                
                {/* Trainer Routes */}
                <Route path="trainers" element={<Trainers />} />
                
                {/* Batch Routes */}
                <Route path="batches" element={<Batches />} />
                
                {/* Reports */}
                <Route path="reports" element={<Reports />} />
                
                {/* Settings */}
                <Route path="settings" element={<Settings />} />
              </Route>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
