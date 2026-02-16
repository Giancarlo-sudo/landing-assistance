"use client";

import { useState } from "react";
import { faqData } from "../data";
import { MessageCircleQuestionIcon } from "lucide-react";
import { BagTitle } from "./ui";

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full px-6 py-16 bg-white" id="faqs">
      <div className="max-w-7xl mx-auto">
        <BagTitle
          icon={MessageCircleQuestionIcon}
          title="Preguntas Frecuentes"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-8">
          <div className="flex flex-col gap-12">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Resuelve tus dudas sobre el sistema de asistencias
            </h2>

            <div className="relative w-full h-full max-w-2xl">
              <video
                width={800}
                autoPlay
                muted
                loop
                controls={false} // o true si quieres controles
                className="w-96 md:w-[500px] lg:w-[800px] h-auto rounded-lg object-contain"
              >
                <source src="/videos/dashboard-demo.mp4" type="video/mp4" />
                <source src="/videos/dashboard-demo.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          </div>

          <div className="space-y-4 h-full flex flex-col justify-center">
            <div className="space-y-1">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left hover:bg-gray-50 transition-colors px-4 rounded-lg"
                  >
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
