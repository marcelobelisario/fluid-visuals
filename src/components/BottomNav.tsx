
import { Home, Heart, RotateCw, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const [active, setActive] = useState("home");
  
  const navItems = [
    { id: "home", icon: Home },
    { id: "favorites", icon: Heart },
    { id: "refresh", icon: RotateCw },
    { id: "profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "p-2 rounded-lg transition-colors",
              active === item.id ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
            )}
          >
            <item.icon className="h-6 w-6" />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
