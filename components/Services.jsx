import React from "react";
import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Rezidenčné sťahovanie",
    description:
      "Sťahovanie domácností, bytov a rodinných domov s dôrazom na bezpečnosť a efektivitu.",
    src: "/images/rezidencne.webp",
  },
  {
    title: "Komerčné sťahovanie",
    description:
      "Sťahovanie kancelárií, obchodov a skladov s minimálnym narušením vašich obchodných operácií.",
    src: "/images/komercne.webp",
  },
  {
    title: "Medzinárodné sťahovanie",
    description:
      "Sťahovanie do zahraničia s kompletnou logistikou a colným odbavením.",
    src: "/images/medzinarodne.webp",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-section">
      <Container id="sluzby" className="flex flex-col gap-15">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl underline decoration-primary underline-offset-8 uppercase">
            Naše služby
          </h2>
          <p className="text-lg lg:w-1/2 text-center">
            Či už ide o malý byt alebo celú firmu, náš tím profesionálov
            zabezpečí hladký priebeh celého procesu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-10 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-cards overflow-hidden  rounded-lg shadow-md flex flex-col gap-3 items-start justify-end min-h-[400px] hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={service.src}
                alt={service.title}
                fill
                className="rounded-lg object-cover w-full z-0"
              />
              <div className="z-10 absolute inset-0 bg-linear-to-t from-cards via-cards/70" />

              <div className="z-20 p-8 ">
                <h3 className="text-xl font-bold ">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
                <Link
                  href="#kontakt"
                  className="mt-4 inline-flex items-center gap-2 font-bold underline decoration-primary underline-offset-4"
                >
                  Kontaktujte nás
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
