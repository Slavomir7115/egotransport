import React from "react";
import HeroBanner from "@/components/HeroBanner";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contactform from "@/components/Contactform";
import Pricing from "@/components/Pricing";

const page = () => {
  return (
    <main>
      <HeroBanner />
      <Pricing />
      <Benefits />
      <Services />
      <Reviews />
      <Gallery />
      <Contactform />
    </main>
  );
};

export default page;
