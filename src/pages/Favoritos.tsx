
import { ArrowLeft, Heart } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

const Favoritos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="px-4 py-4 flex items-center">
          <ArrowLeft 
            className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" 
            onClick={() => navigate(-1)}
          />
          <h1 className="ml-4 text-xl font-semibold">Favoritos</h1>
        </div>
      </header>

      <div className="p-6">
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Nenhum favorito ainda</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Favoritos;
