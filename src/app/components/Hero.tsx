import Image from "next/image";
import { AwardsCarousel } from "./brands";

export const Hero = () => {
  /* return (
    <section
      className="w-full px-6 py-12 pb-0 hero-gradient rounded-b-3xl"
      id="home"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 sm:gap-12 lg:gap-0 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Organiza y Simplifica la Gestión de Asistencias
          </h2>

          <p className="text-lg text-gray-600 max-w-lg">
            Registra automáticamente las asistencias de tu equipo, gestiona
            permisos y vacaciones, y genera reportes detallados en segundos.
          </p>

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
  ); */

  return (
    <section className="bg-slate-50 w-full px-6 py-14 pb-0 hero-gradient rounded-b-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col bg-linear-to-br from-[#b3c294] to-[#7a6b4f] bg-clip-text text-transparent font-playfair">
            <h2 className="text-5xl lg:text-6xl font-bold leading-normal">
              Organiza y Simplifica
            </h2>
            <h2 className="text-5xl lg:text-6xl font-bold">
              la Gestión de Asistencias
            </h2>
          </div>
          <div className="w-full">
            <p className="text-base text-gray-600 max-w-lg mt-4 leading-tight">
              Tu equipo registra asistencias en segundos, tú obtienes reportes
              al instante
            </p>
          </div>
          <div className="flex">
            <button className="bg-[#f2f2f2] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#333333] hover:text-white hover:border-transparent transition-colors duration-300 ease-in-out">
              Explorar Funciones
            </button>
            <button className="bg-[#333333] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#f2f2f2] hover:text-[#333333] hover:border-transparent transition-colors duration-300 ease-in-out">
              Comenzar Gratis
            </button>
          </div>
          <div className="relative w-full h-full mt-4">
            <Image
              src="/image/faqs/faqs.png"
              alt="Dashboard de Kaia"
              width={400}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <AwardsCarousel />
        </div>
      </div>
    </section>
  );
};
