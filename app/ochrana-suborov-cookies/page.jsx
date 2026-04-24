const metadata = {
  title: "Ochrana súborov cookies",
  description:
    "Ochrana súborov cookies a osobných údajov na našej webovej stránke.",
};

const page = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Zásady používania súborov cookie
      </h1>

      <div className="bg-gray-50 p-4 rounded-lg mb-8 text-sm text-gray-600 border border-gray-100">
        <p>Dátum účinnosti: 18. apríla 2026</p>
        <p>Posledná aktualizácia: 24. apríla 2026</p>
      </div>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Čo sú súbory cookie?
          </h2>
          <p>
            Tieto zásady používania súborov cookie vysvetľujú, čo sú súbory
            cookie, ako ich používame, aké typy súborov cookie používame (t. j.
            informácie, ktoré zhromažďujeme pomocou súborov cookie a ako sa
            tieto informácie používajú) a ako môžete spravovať nastavenia
            súborov cookie.
          </p>
          <p className="mt-3">
            Súbory cookie sú malé textové súbory, ktoré sa používajú na
            ukladanie malých kúskov informácií. Ukladajú sa vo vašom zariadení,
            keď sa webová stránka načíta vo vašom prehliadači. Tieto súbory
            cookie nám pomáhajú zabezpečiť správne fungovanie webovej stránky,
            zvýšiť jej bezpečnosť, poskytnúť lepší používateľský zážitok a
            analyzovať výkon webovej stránky.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Ako používame súbory cookie?
          </h2>
          <p>
            Podobne ako väčšina online služieb, aj naša webová stránka používa
            súbory cookie prvej a tretej strany na niekoľko účelov. Súbory
            cookie prvej strany sú väčšinou nevyhnutné pre správne fungovanie
            webovej stránky a nezhromažďujú žiadne vaše osobné údaje.
          </p>
          <p className="mt-3">
            Súbory cookie tretích strán slúžia predovšetkým na pochopenie toho,
            ako webová stránka funguje, ako s ňou komunikujete, na zabezpečenie
            našich služieb a celkovo na to, aby vám poskytli lepší používateľský
            zážitok a urýchlili vašu budúcu interakciu s našou stránkou.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Typy súborov cookie, ktoré používame
          </h2>
          {/* Tu CookieYes automaticky vykreslí tabuľku */}
          <div className="cky-audit-table-element min-h-[100px] bg-gray-50 rounded border border-dashed border-gray-300 flex items-center justify-center italic text-gray-500">
            Tabuľka auditov cookie sa načíta automaticky...
          </div>
        </div>

        <div className="pb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Správa predvolieb súborov cookie
          </h2>
          <button className="cky-banner-element bg-[#f8f9fa] hover:bg-gray-200 text-[#858a8f] px-8 py-2 border border-[#dee2e6] rounded transition-colors cursor-pointer font-medium">
            Nastavenia súhlasu
          </button>

          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              Svoje nastavenia súborov cookie môžete kedykoľvek zmeniť kliknutím
              na tlačidlo „Nastavenia súhlasu“ vyššie. To vám umožní znova
              navštíviť banner a zmeniť svoje preferencie alebo okamžite odvolať
              svoj súhlas.
            </p>
            <p>
              Okrem toho môžete nastavenia svojho prehliadača zmeniť tak, aby
              ste súbory cookie zablokovali alebo vymazali. Nižšie sú uvedené
              odkazy na dokumenty podpory pre hlavné prehliadače:
            </p>

            <ul className="list-disc ml-6 space-y-2 text-blue-600 underline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/accounts/answer/32050"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.apple.com/sk-sk/guide/safari/sfri11471/mac"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.mozilla.org/sk/kb/povolenie-a-zakazanie-cookies"
                >
                  Firefox
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.microsoft.com/sk-sk/windows/odstránenie-a-správa-súborov-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
