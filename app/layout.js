import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.egotransport.sk"),
  title: {
    default: "Egotransport | Sťahovanie a preprava Púchov",
    template: "%s | Egotransport",
  },
  description:
    "Profesionálne sťahovanie a vnútroštátna preprava. Sťahovanie bytov, domov a kancelárií v Púchove a okolí. Spoľahlivo a bez stresu.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Egotransport | Sťahovanie a preprava",
    description:
      "Sťahovanie a autodoprava. Premeníme váš stres zo sťahovania na bezproblémovú skúsenosť.",
    url: "https://www.egotransport.sk",
    siteName: "Egotransport",
    locale: "sk_SK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk" className={`${inter.variable}  h-full antialiased`}>
      <head>
        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/d338d37d320fcd50442f8afd16a7bd43/script.js"
          strategy="afterInteractive"
        ></Script>
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
