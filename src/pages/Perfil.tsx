
import { ArrowLeft, User } from "lucide-react";
import BottomNav from "../components/BottomNav";

const Perfil = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="px-4 py-4 flex items-center">
          <ArrowLeft className="h-6 w-6 text-gray-600" />
          <h1 className="ml-4 text-xl font-semibold">Perfil</h1>
        </div>
      </header>

      <div className="p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Usuário CEFET</h2>
              <p className="text-gray-500">usuario@cefet.br</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Perfil;
