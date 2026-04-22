"use client"; // Dôležité pre interaktívne komponenty v Next.js 13+

import React from "react";
import Container from "@/components/UI/Container";
import Image from "next/image";

// Import Swiper React components a štýlov
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const galleryItems = [
  { image: "/images/stahovanie1.jpeg", alt: "Sťahovanie s profesionálmi" },
  { image: "/images/stahovanie2.jpeg", alt: "Bezproblémové sťahovanie" },
  { image: "/images/stahovanie3.jpeg", alt: "Spokojní klienti" },
  { image: "/images/stahovanie4.jpeg", alt: "Efektívne balenie a manipulácia" },
  { image: "/images/stahovanie5.jpeg", alt: "Rýchle a bezpečné doručenie" },
  { image: "/images/stahovanie6.jpeg", alt: "Sťahovanie s úsmevom" },
  { image: "/images/stahovanie7.jpeg", alt: "Profesionálny tím pri práci" },
];

const Gallery = () => {
  return (
    <section className="py-20">
      <Container id="galeria" className="flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-3xl uppercase">
            Galéria našich <mark>sťahovaní</mark>
          </h2>
          <p className="text-lg max-w-2xl">
            Pozrite sa na naše úspešné sťahovania a spokojných klientov, ktorí
            nám dôverovali.
          </p>
        </div>

        <div className="mt-8">
          <Swiper
            style={{
              "--swiper-pagination-color": "#ffc847",
              "--swiper-pagination-bullet-inactive-color": "#ffc847",
              "--swiper-pagination-bullet-inactive-color": "#ffc847",
              "--swiper-pagination-bullet-inactive-opacity": "0.5",
              "--swiper-navigation-color": "#ffc847",
            }}
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[350px] overflow-hidden rounded-xl shadow-md border border-gray-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
