import { ArrowLeft, Heart, FileText, Video, Code, BookOpen, Star } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

const Favoritos = () => {
  const navigate = useNavigate();

  const favoritos = [
    {
      titulo: "Lista de Derivadas",
      tipo: "PDF",
      icone: FileText,
      cor: "bg-blue-100 text-blue-700",
    },
    {
      titulo: "Explicação sobre Laços de Repetição",
      tipo: "Vídeo",
      icone: Video,
      cor: "bg-red-100 text-red-700",
    },
    {
      titulo: "Lista de Exercícios - Banco de Dados",
      tipo: "Exercício",
      icone: Code,
      cor: "bg-green-100 text-green-700",
    },
    {
      titulo: "Resumo de Eletromagnetismo",
      tipo: "Artigo",
      icone: BookOpen,
      cor: "bg-purple-100 text-purple-700",
    },
  ];

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
        {favoritos.length > 0 ? (
          <div className="space-y-4">
            {favoritos.map((fav, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
                <div className={`p-3 rounded-full ${fav.cor}`}>
                  <fav.icone className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{fav.titulo}</h2>
                  <span className="text-sm text-gray-500 mt-1 inline-block">{fav.tipo}</span>
                </div>
                <Heart className="h-5 w-5 text-red-500 ml-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Nenhum favorito ainda</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Favoritos;
