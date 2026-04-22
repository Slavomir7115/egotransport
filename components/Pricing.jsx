import React from "react";
import Container from "@/components/UI/Container";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <Container className="flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl uppercase">
            Ceny za <mark>sťahovanie</mark> bytov a rodinných domov
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-2 text-left font-bold">
                  Sťahovanie
                </th>
                <th className="border border-border p-2 text-left font-bold">
                  Cena
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">1 izbový byt</td>
                <td className="border border-border p-2">od 100€</td>
              </tr>
              <tr>
                <td className="border border-border p-2">2 izbový byt</td>
                <td className="border border-border p-2">od 150€</td>
              </tr>
              <tr>
                <td className="border border-border p-2">3 izbový byt</td>
                <td className="border border-border p-2">od 200€</td>
              </tr>
              <tr>
                <td className="border border-border p-2">4 izbový byt</td>
                <td className="border border-border p-2">od 250€</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Rodinné domy</td>
                <td className="border border-border p-2">od 300€</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-sm space-y-1">
            <p>- V cene je zahrnutá jedna preprava v rámci mesta.</p>
            <p>
              - V cene nie sú zahrnuté bremená (trezor, pianino, americká
              chladnička, starožitnosti).
            </p>
            <p>- V prípade sťahovania po schodoch sa čas sťahovania predĺži.</p>
            <p>- Prítomnosť výťahu ovplyvňuje výslednú cenovú ponuku.</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl uppercase mb-4 text-center">
            Hodinové sadzby na osoby
          </h2>
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-2 text-left font-bold">
                  Počet
                </th>
                <th className="border border-border p-2 text-left font-bold">
                  Cena
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">2 Sťahováci</td>
                <td className="border border-border p-2">50 € / hod</td>
              </tr>
              <tr>
                <td className="border border-border p-2">3 sťahováci</td>
                <td className="border border-border p-2">70 € / hod</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Každá ďalšia osoba</td>
                <td className="border border-border p-2">+ 20 € / hod</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl uppercase mb-4 text-center">
            Ceny dopravy a prepravy
          </h2>
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-2 text-left font-bold">
                  Služba
                </th>
                <th className="border border-border p-2 text-left font-bold">
                  Cena
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Doprava v meste</td>
                <td className="border border-border p-2">50€</td>
              </tr>
              <tr>
                <td className="border border-border p-2">
                  Kilometrovné – dodávka
                </td>
                <td className="border border-border p-2">0,85€ / km</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Príves</td>
                <td className="border border-border p-2">0,25€ / km</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Paušál príves</td>
                <td className="border border-border p-2">od 50€ na deň</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Chalani na ceste</td>
                <td className="border border-border p-2">
                  12,50 / osoba / hodina
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2">Stojné</td>
                <td className="border border-border p-2 italic font-bold uppercase">
                  Neplatí sa
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2">
                  Minimálna cena služby
                </td>
                <td className="border border-border p-2">50€</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-sm">
            - Km sú počítané tam aj naspäť cez GPS.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl uppercase mb-4 text-center">
            Ceny za ťažké bremená
          </h2>
          <table className="w-full border-collapse border border-border text-center text-sm">
            <thead>
              <tr>
                <th className="border border-border p-2 font-bold text-left">
                  Hmotnosť
                </th>
                <th className="border border-border p-2 font-bold">Cena</th>
                <th className="border border-border p-2 font-bold text-right">
                  Podlažie
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2 text-left">60-99kg</td>
                <td className="border border-border p-2 font-bold">50€</td>
                <td className="border border-border p-2 text-right">5€</td>
              </tr>
              <tr>
                <td className="border border-border p-2 text-left">
                  100-199kg
                </td>
                <td className="border border-border p-2 font-bold">90€</td>
                <td className="border border-border p-2 text-right">7,50€</td>
              </tr>
              <tr>
                <td className="border border-border p-2 text-left">
                  200-299kg
                </td>
                <td className="border border-border p-2 font-bold">120€</td>
                <td className="border border-border p-2 text-right">10€</td>
              </tr>
              <tr>
                <td className="border border-border p-2 text-left">
                  300-399kg
                </td>
                <td className="border border-border p-2 font-bold">150€</td>
                <td className="border border-border p-2 text-right">12,50€</td>
              </tr>
              <tr>
                <td className="border border-border p-2 text-left">
                  400-499kg
                </td>
                <td className="border border-border p-2 font-bold">180€</td>
                <td className="border border-border p-2 text-right">15€</td>
              </tr>
              <tr>
                <td className="border border-border p-2 text-left italic">
                  Nad 500kg
                </td>
                <td
                  className="border border-border p-2 font-bold uppercase"
                  colSpan="2"
                >
                  Individuálne
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl uppercase mb-4 text-center">
            Voliteľné služby - Balenie
          </h2>
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border p-2 font-bold text-left uppercase">
                  Služba
                </th>
                <th className="border border-border p-2 font-bold text-left uppercase">
                  Cena
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Balenie majetku</td>
                <td className="border border-border p-2">
                  20€ / pracovník / hod
                </td>
              </tr>
              <tr>
                <td className="border border-border p-2 italic">
                  Komplet balenie
                </td>
                <td className="border border-border p-2">DOHODOU</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-sm italic">
            - Cena nezahŕňa spotrebovaný materiál.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
