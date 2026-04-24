import Link from "next/link";
import PrimaryButton from "../../components/UI/PrimaryButton";

export default function page() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <Script id="conversion-event" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
              'send_to': 'AW-18114104720/NFmaCPuWraEcEJCbvb1D',
              'value': 1.0,
              'currency': 'EUR'
          });
        `}
      </Script>
      <div className="max-w-md w-full text-center bg-cards p-8 rounded-2xl shadow-sm border border-border">
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 p-3 rounded-full">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold  mb-4">Správa odoslaná!</h1>
        <p className=" mb-8">
          Ďakujeme za váš záujem. Vašu požiadavku sme prijali a budeme vás
          kontaktovať v čo najkratšom čase.
        </p>
        <Link href="/">
          <PrimaryButton>späť na domovskú stránku</PrimaryButton>
        </Link>
        <p className=" text-lg mt-15">
          Ak sa ponáhľate, <b>zavolajte</b> nám na číslo:
        </p>
        <a href="tel:+421 907 721 944" className="inline-block mt-4">
          <PrimaryButton>Zavolajte nám</PrimaryButton>
        </a>
      </div>
    </main>
  );
}
