"use client";
import { watchInView } from "@/lib/watchInView";
import { EmployeeProps } from "@/types/employee";
import { TitleProps } from "@/types/title";
import Image from "next/image";
import { useRef } from "react";

interface HomeTabContentProps {
  employees: EmployeeProps[];
  title: TitleProps;
}

const HomeSection = ({ employees, title }: HomeTabContentProps) => {
  const id = "home";

  const ref = useRef(null);
  watchInView({ ref, id: id });

  return (
    <section
      className="flex flex-col justify-center items-center  overflow-y-auto relative !min-h-[92svh]"
      id={id}
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center mb-4">
        <Image
          alt="logo"
          src="/logo-dark.png"
          sizes="1000px"
          height={0}
          width={0}
          className="w-full max-w-[300px] h-auto hidden dark:block"
        />

        <Image
          alt="logo"
          src="/logo-light.png"
          sizes="1000px"
          height={0}
          width={0}
          className="w-full max-w-[300px] h-auto block dark:hidden"
        />
        <p className="max-w-[600px] text-center">{title.description}</p>
      </div>

      <div className="flex flex-col tablet:flex-row gap-8 h-full">
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
    </section>
  );
};

export default HomeSection;
