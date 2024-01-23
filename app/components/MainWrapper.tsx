"use client";

import { navbarLinks } from "@/constant/navbarLinks";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { useTheme } from "next-themes";
import Image from "next/image";

interface TitleProps {
  title: string;
  subTitle: string;
  description: string;
}

interface MainWrapperProps {
  title: TitleProps;
}

const MainWrapper = ({ title }: MainWrapperProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-[90svh] gap-4 relative">
      <Image
        alt="grid"
        src={theme == "light" ? "/grid-light.svg" : "/grid-dark.svg"}
        sizes="100vh"
        width={0}
        height={0}
        className="absolute h-full w-auto -z-10 m-auto bottom-0 top-0 right-0 left-0 animate-pulse"
      />

      <div className="flex flex-col items-center justify-center">
        <p className="text-lg">{title.title}</p>
        <p className="text-6xl uppercase">{title.subTitle}</p>
        <p className="text-xl max-w-[700px] text-center">{title.description}</p>
      </div>

      <Tabs defaultValue={navbarLinks[0].label} className="w-full">
        <TabsList className="flex flex-grow gap-2 bg-transparent">
          {navbarLinks.map((link, index) => (
            <>
              <TabsTrigger
                value={link.label}
                key={index}
                className="data-[state=active]:text-red"
              >
                {link.title}
              </TabsTrigger>
              {index < navbarLinks.length - 1 && (
                <Separator orientation="vertical" />
              )}
            </>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default MainWrapper;
