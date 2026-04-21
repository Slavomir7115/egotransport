// app/stahovanie/[mesto]/page.js
import { mestaData } from "@/data/mestaData";
import Form from "@/components/UI/Form";
import { notFound } from "next/navigation";
import Container from "@/components/UI/Container";

export async function generateStaticParams() {
  return mestaData.map((m) => ({
    mesto: m.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { mesto: slug } = await params;
  const mesto = mestaData.find((m) => m.slug === slug);

  if (!mesto) return { title: "Sťahovanie" };

  return {
    title: `Sťahovanie ${mesto.nazov} | Profesionálne služby`,
    description: mesto.text,
  };
}

export default async function MestoPage({ params }) {
  const { mesto: slug } = await params;
  const mesto = mestaData.find((m) => m.slug === slug);

  if (!mesto) {
    notFound();
  }

  return (
    <section className="py-20 ">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Sťahovanie {mesto.nazov}
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {mesto.text}
            </p>
            <div className="bg-primary/15 border-l-4 border-primary p-4 ">
              <p className="font-bold ">Naša výhoda: {mesto.vyhoda}</p>
            </div>
          </div>

          <div>
            <Form />
          </div>
        </div>
      </Container>
    </section>
  );
}
