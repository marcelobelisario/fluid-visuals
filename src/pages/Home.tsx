import { Search, BookCopy, Code, FlaskConical, Atom, LayoutDashboard, Database, PenTool } from "lucide-react";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Turmas");
  const tabs = ["Turmas", "Desafios", "Quiz", "PDFs"];
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case "Turmas":
        navigate("/home");
        break;
      case "Desafios":
        navigate("/desafios");
        break;
      case "Quiz":
        navigate("/quiz");
        break;
      case "PDFs":
        navigate("/pdfs");
        break;
    }
  };

  const courses = [
    { title: "Cálculo 1", icon: BookCopy, color: "bg-blue-100" },
    { title: "Prog 1", icon: Code, color: "bg-cyan-100" },
    { title: "Química", icon: FlaskConical, color: "bg-green-100" },
    { title: "Física", icon: Atom, color: "bg-purple-100" },
    { title: "Álgebra Linear", icon: LayoutDashboard, color: "bg-yellow-100" },
    { title: "Banco de Dados", icon: Database, color: "bg-pink-100" },
    { title: "Desenho Técnico", icon: PenTool, color: "bg-gray-100" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-6 pt-8 pb-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Seja Bem-Vindo
          <br />
          <span className="text-blue-600">CEFETIANO!</span>
        </h1>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-3 pl-12 rounded-xl bg-white border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 hover:text-blue-600 transition-colors duration-300" />
        </div>
      </header>

      {/* Tabs */}
      <nav className="px-6 border-b border-gray-200">
        <div className="flex space-x-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={cn(
                "py-4 text-sm font-medium whitespace-nowrap transition-colors relative",
                activeTab === tab
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transition-all duration-300 ease-in-out" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Course Grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div
              className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ease-in-out",
                course.color
              )}
            >
              <course.icon className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Entrar
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
