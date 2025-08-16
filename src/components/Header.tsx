
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="flex h-14 items-center px-4">
        <SidebarTrigger className="mr-4 md:inline-flex hidden" />
        <Menu className="h-5 w-5 mr-4 md:hidden" />
        
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png" 
              alt="Kim's BeautyPass" 
              className="h-6 w-auto"
            />
            <span className="font-bold text-lg hidden sm:inline">Kim's BeautyPass</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">로그인됨</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
