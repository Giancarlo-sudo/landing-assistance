"use client";

import { useState } from "react";
import Image from "next/image";
import { faqData } from "../data";

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Grid de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda - Imagen + Título */}
          <div className="space-y-8">
            {/* Título */}
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Resuelve tus dudas sobre el sistema de asistencias
            </h2>

            <div className="relative w-full h-full max-w-2xl">
              <Image
                src="/image/faqs/faqs.png"
                alt="Dashboard de Kaia"
                width={400}
                height={500}
                className="w-96 md:w-[500px] lg:w-[800px] h-auto rounded-lg object-contain"
              />
            </div>
          </div>

          {/* Columna Derecha - Preguntas */}
          <div className="space-y-4 h-full flex flex-col justify-center">
            {/* Lista de preguntas */}
            <div className="space-y-1">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  {/* Pregunta - Botón */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left hover:bg-gray-50 transition-colors px-4 rounded-lg"
                  >
                    {/* Número + Pregunta */}
                    <div className="flex items-start gap-4 flex-1">
                      <span className="text-gray-400 font-medium text-sm shrink-0">
                        {String(faq.id).padStart(2, "0")}.
                      </span>
                      <span
                        className={`font-medium transition-colors ${
                          openId === faq.id ? "text-gray-900" : "text-gray-600"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Ícono + o - */}
                    <div className="shrink-0">
                      {openId === faq.id ? (
                        <svg
                          className="w-5 h-5 text-gray-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Respuesta - Acordeón */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openId === faq.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-6 pl-12">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
