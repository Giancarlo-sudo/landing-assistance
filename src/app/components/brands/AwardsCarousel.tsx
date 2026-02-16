"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const AwardsCarousel = () => {
  const logos = [
    {
      name: "Kmont",
      logo: "/image/brand/logo-kmont.webp",
    },
    {
      name: "Inorder",
      logo: "/image/brand/logo-inorder-white.png",
    },
    {
      name: "Upkeep",
      logo: "/image/brand/logo-upkeep-white.png",
    },
    {
      name: "LiveFrame",
      logo: "/image/brand/logo-live-white.png",
    },
    {
      name: "3MR",
      logo: "/image/brand/logo-3mr-white.png",
    },
  ];

  return (
    <section className="w-full h-full py-8 mb-4">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6} // Muestra los 8 logos
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={8000} // MUY lento (8 segundos por transición)
          allowTouchMove={false} // Desactiva el drag manual
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="overflow-visible flex justify-center items-center"
        >
          {/* Duplica los logos para scroll infinito suave */}
          {[...logos, ...logos, ...logos].map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
