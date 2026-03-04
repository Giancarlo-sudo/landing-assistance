"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { slides, highlights } from "../data";

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center gradient-mask-bottom"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-1"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(217 60% 80% / 0.12) 0%, hsl(187 94% 30% / 0.06) 40%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8 text-center my-16  ">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
              {slides[current].headline}
            </h3>
            <p className="text-base max-w-xl mx-auto mb-10 leading-relaxed text-white">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 text-white">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 text-sm font-medium bg-gradient-accent rounded-lg glow-blue hover:opacity-90 transition-opacity duration-200"
            >
              Comenzar ahora
            </a>
            <a
              href="#"
              className="inline-flex gap-1 items-center px-6 py-3 text-sm font-medium hover:text-gray-900 hover:bg-white rounded-full transition-colors duration-200"
            >
              <span>Ver demo</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div
            className="flex items-center justify-center gap-6 text-xs text-white animate-fade-up mt-8"
            style={{ animationDelay: "400ms" }}
          >
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary" />
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "bg-gray-700 w-6"
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative w-full mt-10 max-w-5xl mx-auto">
          <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-t from-background via-background/60 to-transparent rounded-lg" />

          <Image
            src="/image/faqs/faqs.png"
            alt="Dashboard de Kaia"
            width={1200}
            height={700}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      <div
        className="absolute -bottom-10 left-0 right-0 h-40 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, white 0%, rgba(255,255,255,0.10) 50%, transparent 100%)",
        }}
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#caracteristicas" aria-label="Scroll down">
          <ChevronDown className="w-5 h-5  animate-bounce-subtle" />
        </a>
      </div>
    </section>
  );
};
