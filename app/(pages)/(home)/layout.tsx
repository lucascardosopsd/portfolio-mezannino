"use client";

import Navbar from "@/components/Navbar";
import WppFloatButton from "@/components/WppFloatingButton";
import Image from "next/image";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <WppFloatButton />

      <Image
        alt="grid"
        src="/grid-dark.svg"
        sizes="100vh"
        width={0}
        height={0}
        className="fixed h-[80vh] w-[80vw] -z-10 m-auto bottom-0 top-0 right-0 left-0 animate-pulse hidden dark:block"
      />

      <Image
        alt="grid"
        src="/grid-light.svg"
        sizes="100vh"
        width={0}
        height={0}
        className="fixed h-[80vh] w-[80vw] -z-10 m-auto bottom-0 top-0 right-0 left-0 animate-pulse block dark:hidden"
      />
      <Navbar />
      {children}
    </div>
  );
}
