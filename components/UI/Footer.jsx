import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/NavLinks";

const Footer = () => {
  return (
    <footer className="py-20">
      <Container className="flex flex-col lg:flex-row items-start justify-between gap-10 ">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Egotransport logo"
              width={150}
              height={150}
              className="object-contain"
            ></Image>
          </Link>
          <p>© 2024 Egotransport. Všetky práva vyhradené.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Navigácia</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors duration-300 text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Právne informácie</h3>
          <ul>
            <li>
              <Link
                href="/ochrana-osobnych-danych"
                className="hover:text-primary transition-colors duration-300 text-lg"
              >
                Ochrana osobných údajov
              </Link>
            </li>
            <li>
              <Link
                href="/ochrana-suborov-cookies"
                className="hover:text-primary transition-colors duration-300 text-lg"
              >
                Ochrana suborov cookies
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
