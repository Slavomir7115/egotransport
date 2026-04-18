import React from "react";
import Container from "@/components/UI/Container";

const Reviews = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl lg:w-1/2 uppercase ">
            Povedali o <mark>nás</mark>
          </h2>
          <p className="text-lg lg:w-1/2">
            Prečítajte si skúsenosti ľudí, ktorým sme pomohli premeniť
            stresujúce sťahovanie na bezproblémovú skúsenosť.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
