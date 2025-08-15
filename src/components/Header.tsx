
const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <img 
            src="/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png" 
            alt="Kimix" 
            className="h-8 w-auto"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            로그인됨
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
