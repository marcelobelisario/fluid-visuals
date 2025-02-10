
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Desafios = () => {
  const navigate = useNavigate();
  const desafios = [
    {
      disciplina: "Cálculo 1",
      tema: "Derivada",
      turmaDesafiante: "Michele",
      periodo: "Matutino",
      prazo: "3 dias úteis",
      premiacao: "Título \"Os Einsteins\"",
    },
    {
      disciplina: "Prog 1",
      tema: "Estruturas de Repetição",
      turmaDesafiante: "Tatiana",
      periodo: "Matutino",
      prazo: "1 dia útil",
      premiacao: "Título \"Steve Jobs\"",
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
          <div className="flex-1 flex justify-center">
            <nav className="flex space-x-8">
              {["Turmas", "Desafios", "Quiz", "PDFs"].map((tab) => (
                <button
                  key={tab}
                  className={cn(
                    "py-2 text-sm font-medium relative",
                    tab === "Desafios" ? "text-blue-600" : "text-gray-600"
                  )}
                >
                  {tab}
                  {tab === "Desafios" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {desafios.map((desafio, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800">{desafio.disciplina}</h2>
            <p className="text-gray-600 mt-1">{desafio.tema}</p>
            
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Turma Desafiante:</span> {desafio.turmaDesafiante}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Período:</span> {desafio.periodo}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Prazo para aceite:</span> {desafio.prazo}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Premiação:</span> {desafio.premiacao}
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Aceitar
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors">
                Rejeitar
              </button>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Desafios;
