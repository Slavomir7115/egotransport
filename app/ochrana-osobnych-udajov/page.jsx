import Container from "@/components/UI/Container";

const metadata = {
  title: "Ochrana osobných údajov - Egotransport",
  description:
    "Informácie o spracúvaní osobných údajov na webovej stránke egotransport.sk v súlade s GDPR.",
};

const page = () => {
  return (
    <main>
      <section className="py-20">
        <Container>
          <article>
            <h1 className="text-3xl font-bold mb-6">
              Informácie o spracúvaní osobných údajov
            </h1>

            <p className="mb-4">
              V súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679
              (GDPR) a zákonom č. 18/2018 Z. z. o ochrane osobných údajov vás
              informujeme o tom, ako spracúvame vaše osobné údaje na webovej
              stránke <strong>egotransport.sk</strong>.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                1. Prevádzkovateľ osobných údajov
              </h2>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <strong>Meno a priezvisko:</strong> Radomír Kvasnička
                </li>
                <li className="mb-2">
                  <strong>Miesto podnikania:</strong> Moravská 1634/19, 020 01
                  Púchov
                </li>
                <li className="mb-2">
                  <strong>IČO:</strong> 46 758 127
                </li>
                <li className="mb-2">
                  <strong>Zápis:</strong> Okresný úrad Považská Bystrica, číslo
                  živnostenského registra: 330-20044
                </li>
                <li className="mb-2">
                  <strong>Kontakt:</strong> info@egotransport.sk
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                2. Rozsah a kategórie spracúvaných údajov
              </h2>
              <p className="mb-4">
                Spracúvame iba údaje, ktoré nám dobrovoľne poskytnete pre účely
                vybavenia vášho dopytu:
              </p>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <strong>Kontaktný formulár:</strong> Meno, priezvisko,
                  e-mailová adresa, telefónne číslo a podrobnosti o dopyte.
                </li>
                <li className="mb-2">
                  <strong>Technické údaje:</strong> Súbory cookies a analytické
                  údaje, ak ste nám na ne udelili súhlas.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                3. Účel a právny základ spracúvania
              </h2>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <strong>Odpoveď na dopyt:</strong> Spracúvanie na základe
                  predzmluvných vzťahov (čl. 6 ods. 1 písm. b GDPR).
                </li>
                <li className="mb-2">
                  <strong>Oprávnený záujem:</strong> Zabezpečenie funkčnosti
                  webu a ochrana pred spamom.
                </li>
                <li className="mb-2">
                  <strong>Súhlas:</strong> Pre analytické a marketingové účely
                  (Google Analytics, Google Tag Manager), ak ste ho udelili cez
                  cookie lištu.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                4. Príjemcovia údajov (Sprostredkovatelia)
              </h2>
              <p className="mb-4">
                Pre zabezpečenie prevádzky využívame tieto služby:
              </p>
              <ul className="list-disc list-inside">
                <li className="mb-2">Netlify (hosting)</li>
                <li className="mb-2">
                  Google Ireland Ltd. (Google Analytics, GTM)
                </li>
                <li className="mb-2">CookieYes (správa súhlasov)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                5. Doba uchovávania údajov
              </h2>
              <p className="mb-4">
                Údaje z formulára uchovávame po dobu nevyhnutnú na vybavenie
                dopytu (štandardne <strong>3 roky</strong>), ak zákon neukladá
                dlhšiu dobu (napr. pri následnej fakturácii).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Vaše práva</h2>
              <p className="mb-4">
                Máte právo na prístup k údajom, ich opravu, vymazanie (právo na
                zabudnutie), obmedzenie spracúvania, ako aj právo podať sťažnosť
                na Úrade na ochranu osobných údajov SR.
              </p>
            </section>

            <p>
              <small>Posledná aktualizácia: 20. 04. 2026</small>
            </p>
          </article>
        </Container>
      </section>
    </main>
  );
};

export default page;
