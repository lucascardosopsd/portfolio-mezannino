"use client";

import { navbarLinks } from "@/constant/navbarLinks";
import NavLink from "./CustomLink";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const [fixedHeader, setFixedHeader] = useState(false);

  const [y, setY] = useState(0);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        if (y > window.scrollY) {
          setFixedHeader(window.scrollY >= 500);
        }

        y < window.scrollY && setFixedHeader(window.scrollY <= 500);

        setY(window.scrollY);
      });
    }
  });

  return (
    <>
      <div
        className={`hidden tablet:flex w-full items-center transition ${
          fixedHeader
            ? "fixed top-0 left-0 bg-background z-30"
            : "static bg-transparent"
        }`}
        id="header"
      >
        <header className="flex items-center justify-between h-20 max-width w-full z-10">
          <nav className="flex items-center justify-center w-full gap-12 max-tablet:hidden">
            <ul className="flex items-center gap-8 text-lg">
              <li>
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10"
                  />
                </Link>
              </li>
              {navbarLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.url} label={link.label} />
                </li>
              ))}

              <li className="flex">
                <Link href="https://api.whatsapp.com/send?phone=5517992777857">
                  <Button
                    className="border rounded-r-none border-red bg-background text-foreground hover:bg-red hover:text-background"
                    size="sm"
                  >
                    Contato
                  </Button>
                </Link>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <header className="w-full flex justify-end fixed z-50 top-2 right-2">
        <MobileMenu />
      </header>
    </>
  );
};

export default Navbar;
