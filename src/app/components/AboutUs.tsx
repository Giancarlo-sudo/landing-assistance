import Image from "next/image";
import { Target, Users, Zap, Award } from "lucide-react";
import { BagTitle } from "./ui";

export const AboutUs = () => {
  return (
    <section className="w-full px-6 py-16 lg:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <BagTitle icon={Award} title="Sobre Nosotros" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Transformamos la gestión de personal en Perú
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Kaia nace de la necesidad de simplificar uno de los procesos más
              importantes en las empresas: el control de asistencias. Entendemos
              que gestionar un equipo no debería ser complicado.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              Por eso creamos una solución moderna, intuitiva y 100% en la nube
              que permite a empresas de todos los tamaños optimizar su tiempo y
              enfocarse en lo que realmente importa: hacer crecer su negocio.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-hero rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-2xl text-gray-900">+20</h4>
                <p className="text-sm text-gray-600">
                  Empresas confían en nosotros
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-hero rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-2xl text-gray-900">+100</h4>
                <p className="text-sm text-gray-600">Usuarios activos</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-hero rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-2xl text-gray-900">99.9%</h4>
                <p className="text-sm text-gray-600">Tiempo de actividad</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/image/about/about-team.jpg"
                alt="Equipo Kaia"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs hidden lg:block">
              <p className="text-sm text-gray-600 mb-2">
                &quot;Kaia nos ayudó a reducir el tiempo de gestión de
                asistencias en un 80%&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-hero rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Juan Martínez
                  </p>
                  <p className="text-xs text-gray-500">CEO, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
