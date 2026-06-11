'use client';
import { useState } from 'react';
import Sidebar from "@/components/layout/sidebar";
import { Menu, X } from 'lucide-react';

export default function EstudioLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Botón hamburguesa (solo móvil) */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar con lógica de visibilidad */}
      <div className={`fixed inset-y-0 left-0 z-40 transform transition-transform md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar />
      </div>

      {/* Contenido principal con ajuste dinámico */}
      <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0 w-full">
        {children}
      </main>

      {/* Overlay para móviles cuando el sidebar está abierto */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}