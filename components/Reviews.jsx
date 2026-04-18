"use client";
import React from "react";
import Container from "@/components/UI/Container";
import { motion } from "framer-motion";
const reviewsData = [
  {
    name: "Jana K.",
    review:
      "Egotransport nám pomohli sťahovať náš domov a boli úžasní! Profesionálny prístup, rýchle doručenie a starostlivosť o naše veci. Určite ich odporúčame!",
  },
  {
    name: "Martin S.",
    review:
      "Sťahovanie s Egotransportom bolo bezproblémové. Tím bol ochotný, efektívny a veľmi opatrný s našimi cennými vecami. Skvelá skúsenosť!",
  },
  {
    name: "Lucia P.",
    review:
      "Egotransport nám uľahčili sťahovanie do nového bytu. Boli rychlí, profesionální a velmi pečliví. Určitě je doporučuji všem, kteří hledají spolehlivou stěhovací službu!",
  },
  {
    name: "Peter M.",
    review:
      "Sťahovanie s Egotransportom bolo skvelé! Tím bol velmi profesionální, rychlý a pečlivý. Určitě je doporučuji všem, kteří hledají spolehlivou stěhovací službu!",
  },
  {
    name: "Eva L.",
    review:
      "Egotransport nám pomohli sťahovať náš domov a boli úžasní! Profesionálny prístup, rýchle doručenie a starostlivosť o naše veci. Určite ich odporúčame!",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 overflow-hidden">
      <Container className="flex flex-col gap-15">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl lg:w-1/2 uppercase ">
            Povedali o <mark>nás</mark>
          </h2>
          <p className="text-lg lg:w-1/2">
            Prečítajte si skúsenosti ľudí, ktorým sme pomohli premeniť
            stresujúce sťahovanie na bezproblémovú skúsenosť.
          </p>
        </div>
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex flex-row gap-5"
        >
          {reviewsData.concat(reviewsData).map((review, index) => (
            <div
              key={index}
              className="min-w-[300px]  p-5 bg-white rounded-lg border border-border  shadow-md"
            >
              <p className=" italic mb-4">"{review.review}"</p>
              <p className="font-bold">- {review.name}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Reviews;
