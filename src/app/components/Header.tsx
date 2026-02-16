import Image from "next/image";
import Link from "next/link";
import SmoothLink from "./SmoothLink";

export const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-slate-50 h-18">
      <div className="max-w-7xl h-full mx-auto flex items-center justify-between">
        <div className="flex items-center relative">
          <Image
            width={40}
            height={40}
            src="/image/logo/logo-kaia.png"
            alt="Logo Kaia"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <SmoothLink
            href="#home"
            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium"
          >
            Inicio
          </SmoothLink>
          <SmoothLink
            href="#about"
            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium"
          >
            Sobre Nosotros
          </SmoothLink>
          <SmoothLink
            href="#plan"
            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium"
          >
            Planes
          </SmoothLink>
          <SmoothLink
            href="#features"
            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium"
          >
            Caracteristicas
          </SmoothLink>
          <SmoothLink
            href="#faqs"
            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium"
          >
            FAQs
          </SmoothLink>

          <SmoothLink
            href="#contact"
            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium"
          >
            Contacto
          </SmoothLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="https://intranet-asistencia.kaia.com.pe"
            target="_blank"
            className="text-gray-700 text-sm font-medium hover:bg-white hover:text-[#333333] transition-colors"
          >
            Iniciar sesión
          </Link>

          <a
            href="#contact"
            className="bg-[#333333] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#f2f2f2] hover:text-[#333333] hover:border-transparent transition-colors duration-300 ease-in-out"
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
};
