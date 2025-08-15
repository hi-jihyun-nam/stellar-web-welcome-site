import React from 'react';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 flex items-center border-b bg-background px-6">
      <SidebarTrigger className="mr-4" />
      
      <div className="flex items-center justify-between w-full">
        <img 
          src="/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png" 
          alt="Kimix" 
          className="h-8 w-auto"
        />
        
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
            로그인됨
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;