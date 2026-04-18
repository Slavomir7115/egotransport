import React from "react";
import Container from "@/components/UI/Container";
import Image from "next/image";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Link from "next/link";

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
      <Container className="flex flex-col gap-15">
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-3xl uppercase">
            Galéria našich <mark>sťahovaní</mark>
          </h2>
          <p className="text-lg">
            Pozrite sa na naše úspešné sťahovania a spokojných klientov, ktorí
            nám dôverovali s ich cennými vecami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-12">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
