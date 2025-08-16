import { Home, Search, Heart, User, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Search", url: "/search", icon: Search },
  { title: "Map", url: "/map", icon: MapPin },
  { title: "My page", url: "/mypage", icon: User },
];

export function MobileNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t md:hidden z-50">
      <div className="flex items-center justify-around h-16">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            end
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}