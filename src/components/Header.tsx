
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        <SidebarTrigger className="mr-4" />
        
        <div className="flex items-center justify-between w-full">
          <img 
            src="/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png" 
            alt="Kimix" 
            className="h-8 w-auto"
          />
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>로그인됨</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
