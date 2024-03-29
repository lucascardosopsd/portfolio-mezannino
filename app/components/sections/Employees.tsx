"use client";

import { watchInView } from "@/lib/watchInView";
import { EmployeeProps } from "@/types/employee";
import Image from "next/image";
import { useRef } from "react";
import SectionHeading from "../SectionHeading";

interface EmployeesTabContentProps {
  employees: EmployeeProps[];
}

const EmployeesSection = ({ employees }: EmployeesTabContentProps) => {
  const id = "employees";

  const ref = useRef(null);
  watchInView({ ref, id });

  return (
    <section
      className="flex h-full w-full max-w-[800px] items-center justify-center"
      id={id}
      ref={ref}
    >
      <SectionHeading title="Profissionais" />
      <div className="flex flex-col gap-4">
        {employees.map((employee, index) => (
          <span
            className="flex flex-col mobile:flex-row items-center gap-4"
            key={index}
          >
            <div className="flex-1 relative w-full h-full bg-background">
              <Image
                alt="Funcionário"
                src={employee.pic}
                sizes="100vh"
                width={0}
                height={0}
                className="object-cover h-full w-full border rounded border-red"
              />
            </div>

            <div className="flex-1 tablet:flex-[2]">
              <p className="text-red text-lg">{employee.name}</p>
              <p className="text-sm tablet:text-base">{employee.bio}</p>
            </div>
          </span>
        ))}
      </div>
    </section>
  );
};

export default EmployeesSection;
