import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/Header";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Egotransport",
  description: "Stahovanie egotransport",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk" className={`${inter.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
