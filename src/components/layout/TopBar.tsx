
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, Moon, Sun, User } from "lucide-react";
import { useState } from "react";

export function TopBar() {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="h-16 border-b bg-white shadow-soft flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-text-primary hover:text-primary" />
        <div className="text-text-secondary text-sm">
          Welcome back, <span className="font-medium text-text-primary">Admin</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        
        <div className="relative">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-destructive text-xs">
              3
            </Badge>
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
        
        <div className="flex items-center gap-2 pl-4 border-l">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="text-sm">
            <div className="font-medium text-text-primary">Admin User</div>
            <div className="text-text-secondary text-xs">administrator</div>
          </div>
        </div>
      </div>
    </header>
  );
}
