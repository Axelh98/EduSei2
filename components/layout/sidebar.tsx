'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  BookOpen, 
  Settings, 
  UserCircle,
  GraduationCap
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', path: '/estudio', icon: LayoutDashboard },
  { name: 'Minuta Semanal', path: '/estudio/minuta', icon: FileText },
  { name: 'Diario de Estudio', path: '/estudio/diario', icon: BookOpen },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen flex flex-col border-r border-slate-800">
      {/* Logo / Brand */}
      <div className="p-6 flex items-center gap-3 text-white">
        <GraduationCap size={28} className="text-blue-500" />
        <span className="font-bold text-lg tracking-tight">AcademiaApp</span>
      </div>

      {/* Navegación */}
      <nav className="flex-1 px-4 mt-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Perfil / Footer del Sidebar */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white">Juan Docente</span>
            <span className="text-[10px] text-slate-500">Administrador</span>
          </div>
        </div>
      </div>
    </aside>
  );
}