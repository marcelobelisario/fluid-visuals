
import { ArrowLeft, Download, FileText, Search } from "lucide-react";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import { cn } from "@/lib/utils";

const PDFs = () => {
  const pdfs = [
    { name: "ListaDerivada.Pdf" },
    { name: "ProvaCal2.Pdf" },
    { name: "ListaJava.Pdf" },
    { name: "Prog2.Pdf" },
    { name: "ProvaFisica1.Pdf" },
    { name: "ListaProg2.Pdf" },
    { name: "Aula5Modelagem.Pdf" },
    { name: "ListaC.Pdf" },
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
                    tab === "PDFs" ? "text-blue-600" : "text-gray-600"
                  )}
                >
                  {tab}
                  {tab === "PDFs" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-3 pl-12 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

        <div className="space-y-3">
          {pdfs.map((pdf, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-red-500" />
                <span className="font-medium text-gray-800">{pdf.name}</span>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Download className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default PDFs;
