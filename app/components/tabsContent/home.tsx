import { EmployeeProps } from "@/types/employee";
import { TabsContent } from "../ui/tabs";
import { TitleProps } from "@/types/title";
import Image from "next/image";

interface HomeTabContentProps {
  employees: EmployeeProps[];
  title: TitleProps;
}

const HomeTabContent = ({ employees, title }: HomeTabContentProps) => {
  return (
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
  );
};

export default HomeTabContent;
