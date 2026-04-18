import React from "react";
import Container from "@/components/UI/Container";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Form from "@/components/UI/Form";

const Contactform = () => {
  return (
    <section className="py-20 bg-foreground text-cards ">
      <Container className="flex flex-col lg:flex-row items-center justify-center gap-15  ">
        <div className="flex flex-col gap-15">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl  uppercase text-cards ">
              Kontaktujte <mark>nás</mark>
            </h2>
            <p className="text-lg lg:w-3/4">
              Máte otázky alebo chcete začať s plánovaním vášho sťahovania? Náš
              tím je tu, aby vám pomohol. Neváhajte nás kontaktovať a my vám
              radi poskytneme všetky potrebné informácie a podporu pre vaše
              sťahovanie.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="mailto:info@egotransport.sk"
              className="flex items-center gap-2   text-lg"
            >
              <Mail
                size={40}
                className="text-foreground bg-primary p-2  rounded-lg"
              />{" "}
              <p className="font-semibold">info@egotransport.sk</p>
            </Link>
            <Link
              href="tel:+421918123456"
              className="flex items-center gap-2   text-lg"
            >
              <Phone
                size={40}
                className="text-foreground bg-primary p-2  rounded-lg"
              />{" "}
              <p className="font-semibold">+421 918 123 456</p>
            </Link>
            <span className="flex items-center gap-2">
              <MapPin
                size={40}
                className="text-foreground bg-primary p-2  rounded-lg"
              />{" "}
              <p className="font-semibold">Na Hrebene 1, 811 05 Bratislava</p>
            </span>
          </div>
        </div>
        <Form />
      </Container>
    </section>
  );
};

export default Contactform;
