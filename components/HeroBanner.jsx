import React from "react";
import Container from "./UI/Container";
import Image from "next/image";
import Form from "./UI/Form";
import { Users } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-cards via-cards/80 to-transparent z-10"></div>
      <Image
        priority
        src="/images/herobanner.webp"
        alt="Hero Banner"
        fill
        sizes="100vw"
        className="inset-0 z-0 object-cover object-center"
      />

      <Container className="relative z-20 flex gap-20 flex-col md:flex-row items-center justify-center h-full ">
        <div className="flex flex-col gap-3 items-start justify-center flex-basis-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight uppercase">
            Sťahovanie bez <mark>starostí</mark>
          </h1>
          <p className="text-lg">
            Sťahujeme už do 24 hodín. Vyplňte formulár a získajte cenovú ponuku
            na mieru úplne zdarma.
          </p>
          <span className="flex flex-row items-center justify-center gap-3 mt-5">
            <Users className="text-primary" size={20} />
            <p className="text-sm font-bold">
              500+ Spokojných klientov za tento rok
            </p>
          </span>
        </div>
        <div className="flex flex-basis-1/2  w-full h-full">
          <Form />
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
