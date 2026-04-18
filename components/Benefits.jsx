import React from "react";
import Container from "@/components/UI/Container";
import { Clock, ShieldCheck, Truck, BadgeEuro } from "lucide-react";

const iconBox = [
  {
    icon: <Clock size={30} className="text-foreground" />,
    title: "10+ rokov skúseností",
    description:
      "Viac ako desaťročie na cestách. Máme za sebou tisíce úspešných sťahovaní a spokojných klientov.",
  },
  {
    icon: <ShieldCheck size={30} className="text-primary" />,
    title: "Sťahovanie s poistením",
    description:
      "Vaše veci sú u nás v bezpečí. Každý náklad je plne poistený proti akémukoľvek poškodeniu.",
  },
  {
    icon: <Truck size={30} className="text-primary" />,
    title: "Moderný vozový park",
    description:
      "Naše vozidlá sú pravidelne servisované a vybavené potrebnou technikou pre bezpečnú manipuláciu.",
  },
  {
    icon: <BadgeEuro size={30} className="text-primary" />,
    title: "Férová cenotvorba",
    description:
      "Žiadne skryté poplatky. Cenovú ponuku vypracujeme vopred a na mieru vašim potrebám.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20">
      <Container className="flex flex-col gap-15">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl lg:w-1/2 uppercase ">
            Logistika, ktorá definuje <mark>spoľahlivosť</mark>
          </h2>
          <p className="text-lg lg:w-1/2">
            Naše logistické riešenia zabezpečujú spoľahlivé a efektívne
            doručovanie vašich tovarov.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-1 lg:grid-rows-2 gap-4">
          {iconBox.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3 items-start justify-center bg-cards shadow-md border border-border p-8 rounded-lg ${index === 0 ? "lg:col-span-2 bg-primary" : ""} ${index === 3 ? "lg:col-span-4 bg-section" : ""}`}
            >
              {item.icon}
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
