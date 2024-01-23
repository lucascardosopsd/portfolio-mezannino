"use client";
import Image from "next/image";
import { EmployeeProps } from "@/types/employee";
import { useTheme } from "next-themes";
import { TitleProps } from "@/types/title";
import { PortfolioProps } from "@/types/portfolio";
import HomeTabContent from "./tabsContent/home";
import PortfolioTabContent from "./tabsContent/Portfolio";
import { ServiceProps } from "@/types/service";
import ServicesTabContent from "./tabsContent/services";
import { useState } from "react";
import EmployeesTabContent from "./tabsContent/employees";
import Tabs from "./Tabs";

interface MainWrapperProps {
  title: TitleProps;
  employees: EmployeeProps[];
  portfolio: PortfolioProps[];
  services: ServiceProps[];
}

const MainWrapper = ({
  title,
  employees,
  portfolio,
  services,
}: MainWrapperProps) => {
  const { theme } = useTheme();
  const [currentMenu, setCurrentMenu] = useState("home");

  const tabContents = {
    home: <HomeTabContent employees={employees} title={title} />,
    portfolio: <PortfolioTabContent portfolio={portfolio} />,
    services: <ServicesTabContent services={services} />,
    employees: <EmployeesTabContent employees={employees} />,
  };

  const currentTabContent =
    tabContents[currentMenu as keyof typeof tabContents];

  return (
    <div className="flex items-center justify-center h-[92svh] min-h-[92svh] relative overflow-hidden flex-col">
      <Image
        alt="grid"
        src={theme == "light" ? "/grid-light.svg" : "/grid-dark.svg"}
        sizes="100vh"
        width={0}
        height={0}
        className="absolute h-full w-auto -z-10 m-auto bottom-0 top-0 right-0 left-0 animate-pulse"
      />

      <Tabs currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />

      {currentTabContent}
    </div>
  );
};

export default MainWrapper;
