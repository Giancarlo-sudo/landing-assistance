import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-hero text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/image/logo/kaia-logo-white.png"
                alt="Kaia Logo"
                width={40}
                height={40}
                className="w-auto h-8"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Sistema inteligente de gestión de asistencias. Simplifica el
              control de tu equipo con tecnología moderna y eficiente.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-hero transition-colors"
                aria-label="Facebook"
              >
                <Image
                  src="/image/logo/facebook.svg"
                  alt="Facebook"
                  loading="lazy"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-hero transition-colors"
                aria-label="Instagram"
              >
                <Image
                  src="/image/logo/instagram.svg"
                  alt="Instagram"
                  loading="lazy"
                  width={20}
                  className="brightness-0 invert"
                  height={20}
                />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-hero transition-colors"
                aria-label="LinkedIn"
              >
                <Image
                  src="/image/logo/linkedin.svg"
                  alt="Linkedin Kaia"
                  loading="lazy"
                  className="brightness-0 invert"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Producto</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#caracteristicas"
                  className="hover:text-white transition-colors"
                >
                  Características
                </Link>
              </li>
              <li>
                <Link
                  href="#precios"
                  className="hover:text-white transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="hover:text-white transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#nosotros"
                  className="hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex justify-center items-center w-10 h-10 border border-transparent rounded-full shadow-lg bg-gray-800   hover:bg-hero duration-300 ease-in-out transition-all">
                  <Mail className="w-5 h-5 text-white shrink-0 mt-0.5" />
                </div>

                <a
                  href="mailto:info@kaia.com.pe"
                  className="hover:text-white transition-colors h-full my-auto"
                >
                  info@kaia.com.pe
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex justify-center items-center w-10 h-10 border border-transparent rounded-full shadow-lg bg-gray-800   hover:bg-hero duration-300 ease-in-out transition-all">
                  <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" />
                </div>
                <a
                  href="tel:+51922929616"
                  className="hover:text-white transition-colors h-full my-auto"
                >
                  +51 922 929 616
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex justify-center items-center w-10 h-10 border border-transparent rounded-full shadow-lg bg-gray-800   hover:bg-hero duration-300 ease-in-out transition-all">
                  <Image
                    src="/image/svg/mapPin.svg"
                    alt="Map Pin"
                    width={25}
                    height={25}
                    className="brightness-0 invert"
                  />
                </div>
                <span className="h-full my-auto">Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Kaia. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacidad"
                className="hover:text-white transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="hover:text-white transition-colors"
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
