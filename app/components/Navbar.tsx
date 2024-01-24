"use client";

import { navbarLinks } from "@/constant/navbarLinks";
import NavLink from "./CustomLink";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

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
            ? "fixed top-0 bg-background z-30"
            : "static bg-transparent"
        }`}
        id="header"
      >
        <header className="flex items-center justify-between h-20 max-width w-full z-10">
          <nav className="flex items-center justify-center w-full gap-12 max-tablet:hidden">
            <ul className="flex items-center gap-8 text-lg">
              <li>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-10 h-10"
                />
              </li>
              {navbarLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.url} label={link.label} />
                </li>
              ))}

              <li className="flex">
                <Button
                  className="border rounded-r-none border-red bg-background text-foreground hover:bg-red hover:text-background"
                  size="sm"
                >
                  Contato
                </Button>
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
