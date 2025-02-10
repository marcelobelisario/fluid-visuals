import { ArrowLeft, FileText, RotateCw, BookOpen, Code, FlaskConical, Atom } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

const Atualizacoes = () => {
  const navigate = useNavigate();

  const updates = [
    {
      disciplina: "Cálculo 1",
      conteudo: "Novo material sobre derivadas adicionado.",
      tipo: "PDF",
      icone: BookOpen,
      cor: "bg-blue-100 text-blue-700",
    },
    {
      disciplina: "Prog 1",
      conteudo: "Exercícios sobre loops disponíveis no portal.",
      tipo: "Exercícios",
      icone: Code,
      cor: "bg-green-100 text-green-700",
    },
    {
      disciplina: "Química",
      conteudo: "Vídeo explicativo sobre reações químicas postado.",
      tipo: "Vídeo",
      icone: FlaskConical,
      cor: "bg-purple-100 text-purple-700",
    },
    {
      disciplina: "Física",
      conteudo: "Simulação interativa sobre Cinemática adicionada.",
      tipo: "Simulação",
      icone: Atom,
      cor: "bg-yellow-100 text-yellow-700",
    },
    {
      disciplina: "Banco de Dados",
      conteudo: "Novo artigo sobre Normalização de dados.",
      tipo: "Artigo",
      icone: FileText,
      cor: "bg-red-100 text-red-700",
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
          <h1 className="ml-4 text-xl font-semibold">Atualizações</h1>
        </div>
      </header>

      <div className="p-6">
        {updates.length > 0 ? (
          <div className="space-y-4">
            {updates.map((update, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
                <div className={`p-3 rounded-full ${update.cor}`}>
                  <update.icone className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{update.disciplina}</h2>
                  <p className="text-gray-600">{update.conteudo}</p>
                  <span className="text-sm text-gray-500 mt-1 inline-block">{update.tipo}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <RotateCw className="h-16 w-16 text-gray-400 mx-auto mb-4 animate-spin" />
            <p className="text-gray-500">Nenhuma atualização disponível</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Atualizacoes;
