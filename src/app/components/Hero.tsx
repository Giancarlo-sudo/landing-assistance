import Image from "next/image";

export const Hero = () => {
  return (
    <section className="w-full px-6 py-12 pb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 sm:gap-12 lg:gap-0 items-center">
        {/* Columna Izquierda - Contenido */}
        <div className="space-y-6">
          {/* Título Principal */}
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Organiza y Simplifica la Gestión de Asistencias
          </h2>

          {/* Descripción */}
          <p className="text-lg text-gray-600 max-w-lg">
            Registra automáticamente las asistencias de tu equipo, gestiona
            permisos y vacaciones, y genera reportes detallados en segundos.
          </p>

          {/* Botones CTA */}
          <div className="flex items-center gap-4">
            <button className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Comenzar Gratis
            </button>

            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-medium group">
              Explorar Funciones
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-4">
            {/* Avatares */}
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-purple-400 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-pink-400 border-2 border-white"></div>
            </div>

            {/* Texto */}
            <div>
              <p className="text-2xl font-bold text-gray-900">Empresas</p>
              <p className="text-sm text-gray-500">
                Confían en Kaia para gestionar sus asistencias de forma
                eficiente
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/image/hero/mockup-left-phone.png"
            alt="Kaia - Sistema de Asistencias"
            width={300}
            height={450}
            className="w-64 md:w-80 lg:w-96 h-auto" 
            priority
          />
        </div>
      </div>
    </section>
  );
};
