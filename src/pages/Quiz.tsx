
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import { cn } from "@/lib/utils";

const Quiz = () => {
  const [activeTab, setActiveTab] = useState("Hoje");
  const tabs = ["Hoje", "Mês", "Anual"];
  
  const rankings = [
    { position: 1, name: "Michele", points: 453, avatar: "/placeholder.svg" },
    { position: 2, name: "João", points: 442, avatar: "/placeholder.svg" },
    { position: 3, name: "Pedro", points: 433, avatar: "/placeholder.svg" },
    { position: 4, name: "Monica", points: 223, avatar: "/placeholder.svg" },
    { position: 5, name: "Bruna", points: 160, avatar: "/placeholder.svg" },
    { position: 6, name: "Cesar", points: 140, avatar: "/placeholder.svg" },
    { position: 18, name: "You", points: 120, avatar: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="px-4 py-4 flex items-center">
          <ArrowLeft className="h-6 w-6 text-gray-600" />
          <div className="flex-1 flex justify-center">
            <nav className="flex space-x-8">
              {["Turmas", "Desafios", "Quiz", "PDFs"].map((tab) => (
                <button
                  key={tab}
                  className={cn(
                    "py-2 text-sm font-medium relative",
                    tab === "Quiz" ? "text-blue-600" : "text-gray-600"
                  )}
                >
                  {tab}
                  {tab === "Quiz" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="bg-purple-600 rounded-full p-2 flex justify-between items-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                activeTab === tab
                  ? "bg-white text-purple-600"
                  : "text-white"
              )}
            >
              {tab}
            </button>
          ))}
          <div className="bg-purple-700 text-white px-4 py-2 rounded-full">
            20
          </div>
        </div>

        <div className="space-y-4">
          {rankings.map((user, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center p-4 bg-white rounded-lg shadow-sm",
                user.position <= 3 && "border-2 border-purple-500"
              )}
            >
              <span className="w-8 text-lg font-bold text-gray-600">
                {user.position.toString().padStart(2, "0")}
              </span>
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                {user.position <= 3 && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                    {user.position}
                  </div>
                )}
              </div>
              <span className="ml-4 flex-1 font-medium text-gray-800">
                {user.name}
              </span>
              <span className="font-bold text-purple-600">{user.points}pt</span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Quiz;
