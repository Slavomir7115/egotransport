"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants/NavLinks";
import PrimaryButton from "./PrimaryButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-999 px-5 sticky flex flex-row items-center justify-between top-5 bg-cards/90 min-h-[80px] w-[95%] mx-auto shadow-sm border border-border rounded-lg ">
      <Link href="/">
        <Image
          alt="logo ego transport"
          width={80}
          height={80}
          src="/images/logo.png"
        />
      </Link>
      <nav className="hidden lg:flex">
        <ul className="flex flex-row items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="">
              <Link
                href={link.href}
                className="text-md font-bold hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-row items-center gap-5">
        <Link href="tel:+421 907 721 944">
          <PrimaryButton>Zavolajte nám</PrimaryButton>
        </Link>
        {isMenuOpen ? (
          <X
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden cursor-pointer"
            size={28}
            aria-label="Zavrieť menu"
          />
        ) : (
          <Menu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden cursor-pointer"
            size={28}
            aria-label="Otvoriť menu"
          />
        )}
      </div>

      {/* Mobilné menu */}
      {isMenuOpen && (
        <AnimatePresence>
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            className="absolute top-full left-0 w-full bg-cards shadow-lg border border-border rounded-lg mt-2 lg:hidden"
          >
            <ul className="flex flex-col items-center gap-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id} className="">
                  <Link
                    rel="noopener noreferrer"
                    href={link.href}
                    className="text-md font-bold hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </AnimatePresence>
      )}
    </header>
  );
};

export default Header;
