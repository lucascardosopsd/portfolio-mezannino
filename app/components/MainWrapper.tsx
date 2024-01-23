"use client";
import { navbarLinks } from "@/constant/navbarLinks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { EmployeeProps } from "@/types/employee";
import { useTheme } from "next-themes";

interface TitleProps {
  title: string;
  subTitle: string;
  description: string;
}

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

          <TabsContent
            value="home"
            className="flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm">{title.title}</p>
              <p className="text-4xl uppercase">{title.subTitle}</p>
              <p className="max-w-[600px] text-center">{title.description}</p>
            </div>

            <div className="flex gap-8 h-full">
              {employees.map((employee, index) => (
                <div
                  className={`relative h-[60svh] w-[300px] border border-red ${
                    index % 2 == 0 && "mt-10"
                  }`}
                  key={index}
                >
                  <Image
                    alt="Funcionário"
                    src={employee.pic}
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="object-cover h-full w-full"
                  />

                  <div className="absolute flex items-end justify-center text-xl pb-5 bottom-0 left-0 h-[200px] w-full bg-gradient-to-t from-black to-transparent z-10">
                    {employee.name}
                  </div>

                  <div className="h-full w-full -z-10 bg-gradient-to-t absolute left-0 top-0 from-red from-30% to-transparent opacity-60" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default MainWrapper;
