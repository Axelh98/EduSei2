'use client';

import React, { useState } from 'react';
import { BookMarked, Save } from 'lucide-react';

export default function DiarioDeEstudio() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <BookMarked className="text-indigo-600" /> Diario de Estudio
        </h2>
      </div>

      <div className="p-6 space-y-4">
        <input 
          type="text" 
          placeholder="Título de la revelación o lección de hoy..." 
          className="w-full px-4 py-3 text-lg font-medium border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
        />
        
        <textarea 
          className="w-full h-[400px] p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none bg-slate-50/50"
          placeholder="Escribe aquí tus impresiones, dudas y lo que has aprendido..."
        />

        <div className="flex justify-between items-center pt-2">
          <span className="text-xs text-slate-400">Guardado automático activado</span>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-200">
            <Save size={18} /> Publicar entrada
          </button>
        </div>
      </div>
    </div>
  );
}