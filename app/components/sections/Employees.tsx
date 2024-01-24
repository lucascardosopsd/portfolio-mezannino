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
      className="flex h-full w-full max-w-[1000px] items-center justify-center"
      id={id}
      ref={ref}
    >
      <SectionHeading title="Profissionais" />
      <div className="flex gap-4">
        {employees.map((employee, index) => (
          <>
            <div
              className="flex-1 relative w-full h-full bg-background"
              key={index}
            >
              <Image
                alt="Funcionário"
                src={employee.pic}
                sizes="100vh"
                width={0}
                height={0}
                className="object-cover h-[400px] w-full border rounded border-red"
              />
            </div>

            <div className="flex-1">
              <p className="text-red text-lg">{employee.name}</p>
              <p className="text-xs">{employee.bio}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default EmployeesSection;
