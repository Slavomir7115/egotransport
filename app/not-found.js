import Link from "next/link";
import Container from "@/components/UI/Container";
import PrimaryButton from "@/components/UI/PrimaryButton";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-6xl font-bold text-primary mb-4">404</h2>
      <h1 className="text-3xl font-semibold mb-6">Stránka sa nenašla</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Ľutujeme, ale stránka, ktorú hľadáte, neexistuje alebo bola presunutá.
      </p>
      <Link href="/">
        <PrimaryButton>Späť na domovskú stránku</PrimaryButton>
      </Link>
    </Container>
  );
}
