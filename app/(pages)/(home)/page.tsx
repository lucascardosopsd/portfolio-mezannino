import { GetEmployees } from "@/actions/GetEmployees";
import { GetPortfolio } from "@/actions/GetPortfolio";
import { GetServices } from "@/actions/GetServices";
import { GetTitle } from "@/actions/GetTitle";
import PortfolioSection from "@/components/sections/Portfolio";
import EmployeesSection from "@/components/sections/Employees";
import HomeSection from "@/components/sections/Home";
import ServicesSection from "@/components/sections/Services";

export default async function Home() {
  const title = await GetTitle();
  const employees = (await GetEmployees()).sort((a, b) => a.order - b.order);
  const portfolio = (await GetPortfolio()).sort((a, b) => a.order - b.order);
  const services = (await GetServices()).sort((a, b) => a.order - b.order);

  return (
    <main className="overflow-x-hidden">
      <HomeSection employees={employees} title={title[0]} />,
      <PortfolioSection portfolio={portfolio} />,
      <ServicesSection services={services} />,
      <EmployeesSection employees={employees} />
    </main>
  );
}
