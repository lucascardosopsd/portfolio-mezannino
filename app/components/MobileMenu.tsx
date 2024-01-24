"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLink from "./CustomLink";
import { navbarLinks } from "@/constant/navbarLinks";
import { ThemeToggle } from "./ThemeToggle";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tablet:hidden">
      {/* Toggle */}
      <button
        className="bg-background p-2 rounded border border-border"
        onClick={toggle}
      >
        <Menu size={26} />
      </button>

      {/* Content */}

      <div
        className={`w-full h-full flex flex-col bg-background fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full items-center justify-between h-20 max-width border-b border-border px-4">
          <ThemeToggle />
          <button
            className="text-grey-700 hover:text-purple transition-colors"
            onClick={toggle}
          >
            <X size={36} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-10">
          <ul className="flex flex-col gap-5">
            {navbarLinks.map((link, index) => (
              <li key={index} onClick={toggle}>
                <NavLink
                  href={link.url}
                  label={link.label}
                  classname="text-xl text-center"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
