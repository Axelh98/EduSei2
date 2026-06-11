'use client';

import React from 'react';
import { Save, Calendar, BookOpen, Sparkles, X } from 'lucide-react';

export default function MinutaStructure() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
        <h2 className="text-lg font-bold text-slate-800">Minuta de Seminario</h2>
      </div>

      <form className="p-6 space-y-6">
        {/* Encabezado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Fecha</label>
            <input type="date" className="w-full px-3 py-2 bg-slate-50 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Clase N°</label>
            <input type="number" className="w-full px-3 py-2 bg-slate-50 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        {/* Momentos Espirituales */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <BookOpen size={16} className="text-blue-600" /> Momentos Espirituales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input type="text" placeholder="Himno Inicial" className="w-full p-2 border rounded-lg" />
            <input type="text" placeholder="Primera Oración" className="w-full p-2 border rounded-lg" />
            <input type="text" placeholder="Pensamiento" className="w-full p-2 border rounded-lg" />
          </div>
        </div>

        {/* Gestión */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <Sparkles size={16} className="text-amber-500" /> Gestión y Seguimiento
          </h3>
          <textarea placeholder="¿Cómo ayudar a los jóvenes a volver?" className="w-full p-3 border rounded-lg min-h-[80px]" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea placeholder="Cosas positivas..." className="w-full p-3 border rounded-lg min-h-[80px]" />
            <textarea placeholder="Áreas a mejorar..." className="w-full p-3 border rounded-lg min-h-[80px]" />
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button type="button" className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg">Cancelar</button>
          <button type="submit" className="px-6 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 shadow-sm">
            <Save size={16} /> Guardar Minuta
          </button>
        </div>
      </form>
    </div>
  );
}