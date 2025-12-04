import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center relative">
          <Image
            width={40}
            height={40}
            src="/image/logo/logo.webp"
            alt="Logo Kaia"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
            Inicio
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
            Caracteristicas
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
            FAQs
          </button>

          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
            Contacto
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-gray-900 text-sm font-medium">
            Iniciar sesión
          </button>

          <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Contactar
          </button>
        </div>
      </div>
    </header>
  );
};
