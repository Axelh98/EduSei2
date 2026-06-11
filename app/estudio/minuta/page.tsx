import MinutaStructure from "@/components/minuta/minuta-structure";

export default function MinutaPage() {
  return (
      <main className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Registro de Minuta
          </h1>
          
          {/* Aquí renderizamos el componente que creamos */}
          <MinutaStructure />
        </div>
      </main>

  );
}