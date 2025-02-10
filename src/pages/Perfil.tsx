import { ArrowLeft, User, Pencil } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <header className="bg-white shadow-md">
        <div className="px-6 py-4 flex items-center">
          <ArrowLeft 
            className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800 transition"
            onClick={() => navigate(-1)}
          />
          <h1 className="ml-4 text-xl font-semibold text-gray-800">Perfil</h1>
        </div>
      </header>

      {/* Card de Perfil */}
      <div className="p-6 flex flex-col items-center">
        <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center border-2 border-gray-300">
                <User className="h-10 w-10 text-gray-500" />
              </div>
              {/* Informações do Usuário */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Usuário CEFET</h2>
                <p className="text-gray-500 text-sm">usuario@cefet.br</p>
              </div>
            </div>
            {/* Botão de edição */}
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
              <Pencil className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Informações Extras */}
          <div className="mt-6 space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Curso</span>
              <span className="font-medium text-gray-800">Engenharia</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Período</span>
              <span className="font-medium text-gray-800">Noturno</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Matrícula</span>
              <span className="font-medium text-gray-800">202310001</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Perfil;
