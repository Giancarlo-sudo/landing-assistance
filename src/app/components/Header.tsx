"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SmoothLink from "./SmoothLink";
import { navLinks } from "../data";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-transparent backdrop-blur-sm border-b-transparent "
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${scrolled ? "text-black" : "text-white"}`}
      >
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center relative shrink-0">
            {scrolled ? (
              <Image
                width={32}
                height={32}
                src="/image/logo/kaia-logo-black.png"
                alt="Logo Kaia"
                className="sm:w-auto sm:h-8"
              />
            ) : (
              <Image
                width={32}
                height={32}
                src="/image/logo/kaia-logo-white.png"
                alt="Logo Kaia"
                className="sm:w-auto sm:h-8"
              />
            )}
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <SmoothLink
                key={link.href}
                href={link.href}
                className="flex items-center gap-1  hover:text-gray-200 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
              </SmoothLink>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3 lg:gap-4 ">
            <Link
              href="https://intranet-asistencia.kaia.com.pe"
              target="_blank"
              className="text-sm font-medium  hover:bg-white hover:text-hero hover:p-3 hover:rounded-full transition-all duration-300 ease-in-out whitespace-nowrap"
            >
              Iniciar sesión
            </Link>

            <SmoothLink
              href="#contact"
              className="bg-hero text-white! drop-shadow-md px-4 lg:px-6 py-2.5 rounded-full text-sm font-medium hover: transition-all duration-300 ease-in-out"
            >
              Contactar
            </SmoothLink>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md borde-none outline-0   hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 pb-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-1 pt-4 border-t border-slate-200">
            {navLinks.map((link) => (
              <SmoothLink
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-1  hover:text-gray-200 px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
              >
                {link.label}
              </SmoothLink>
            ))}

            <div className="w-full flex flex-col space-y-3 border-t border-slate-200 bg-slate-50">
              <Link
                href="https://intranet-asistencia.kaia.com.pe"
                target="_blank"
                className=" text-base font-medium  hover:bg-white hover:text-hero px-3 py-3 rounded-md transition-colors duration-200 text-center"
              >
                Iniciar sesión
              </Link>

              <SmoothLink
                href="#contact"
                onClick={closeMenu}
                className="bg-[#333333]  px-6 py-3 rounded-full text-base font-medium hover:bg-gray-800 hover: transition-all duration-300 ease-in-out text-center"
              >
                Contactar
              </SmoothLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
