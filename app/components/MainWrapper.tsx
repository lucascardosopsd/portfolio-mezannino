"use client";
import { navbarLinks } from "@/constant/navbarLinks";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { EmployeeProps } from "@/types/employee";
import { useTheme } from "next-themes";
import { TitleProps } from "@/types/title";
import HomeTabContent from "./tabsContent/home";

interface MainWrapperProps {
  title: TitleProps;
  employees: EmployeeProps[];
}

const MainWrapper = ({ title, employees }: MainWrapperProps) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-[92svh] relative overflow-hidden gap-2">
        <Image
          alt="grid"
          src={theme == "light" ? "/grid-light.svg" : "/grid-dark.svg"}
          sizes="100vh"
          width={0}
          height={0}
          className="absolute h-full w-auto -z-10 m-auto bottom-0 top-0 right-0 left-0 animate-pulse"
        />

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

          <HomeTabContent employees={employees} title={title} />
        </Tabs>
      </div>
    </>
  );
};

export default MainWrapper;
