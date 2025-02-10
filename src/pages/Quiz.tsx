import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const avatars = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
];

const Quiz = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Hoje");
  const tabs = ["Hoje", "Mês", "Anual"];

  const rankings = [
    { position: 1, name: "Michele", points: 453, avatar: avatars[0] },
    { position: 2, name: "João", points: 442, avatar: avatars[1] },
    { position: 3, name: "Pedro", points: 433, avatar: avatars[2] },
    { position: 4, name: "Monica", points: 223, avatar: avatars[3] },
    { position: 5, name: "Bruna", points: 160, avatar: avatars[4] },
    { position: 6, name: "Cesar", points: 140, avatar: avatars[5] },
    { position: 18, name: "You", points: 120, avatar: avatars[6] },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="px-4 py-4 flex items-center">
          <ArrowLeft 
            className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" 
            onClick={() => navigate(-1)}
          />
          <h1 className="ml-4 text-xl font-semibold">Ranking do Quiz</h1>
        </div>
      </header>

      <div className="p-4">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 bg-purple-100 p-2 rounded-full mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === tab
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-purple-600 hover:bg-purple-300"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Ranking */}
        <div className="space-y-4">
          {rankings.map((user, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all",
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
                  className="w-12 h-12 rounded-full border-2 border-gray-300"
                />
                {user.position <= 3 && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
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
