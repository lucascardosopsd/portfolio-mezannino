"use client";
import { navbarLinks } from "@/constant/navbarLinks";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { EmployeeProps } from "@/types/employee";
import { useTheme } from "next-themes";
import { TitleProps } from "@/types/title";
import { PortfolioProps } from "@/types/portfolio";
import HomeTabContent from "./tabsContent/home";
import PortfolioTabContent from "./tabsContent/Portfolio";

interface MainWrapperProps {
  title: TitleProps;
  employees: EmployeeProps[];
  portfolio: PortfolioProps[];
}

const MainWrapper = ({ title, employees, portfolio }: MainWrapperProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center h-[90svh] min-h-[90svh] relative overflow-hidden ">
      <Image
        alt="grid"
        src={theme == "light" ? "/grid-light.svg" : "/grid-dark.svg"}
        sizes="100vh"
        width={0}
        height={0}
        className="absolute h-full w-auto -z-10 m-auto bottom-0 top-0 right-0 left-0 animate-pulse"
      />

      <Tabs defaultValue={navbarLinks[0].label} className="h-full pb-10">
        <TabsList className="flex flex-grow gap-2 bg-transparent">
          {navbarLinks.map((link, index) => (
            <span className="flex" key={index}>
              <TabsTrigger
                value={link.label}
                className="data-[state=active]:text-red"
              >
                {link.title}
              </TabsTrigger>
              {index < navbarLinks.length - 1 && (
                <Separator orientation="vertical" />
              )}
            </span>
          ))}
        </TabsList>

        <HomeTabContent employees={employees} title={title} />

        <PortfolioTabContent portfolio={portfolio} />
      </Tabs>
    </div>
  );
};

export default MainWrapper;
