import { GetEmployees } from "@/actions/GetEmployees";
import { GetPortfolio } from "@/actions/GetPortfolio";
import { GetServices } from "@/actions/GetServices";
import { GetTitle } from "@/actions/GetTitle";
import PortfolioSection from "@/components/sections/Portfolio";
import EmployeesSection from "@/components/sections/Employees";
import HomeSection from "@/components/sections/Home";
import ServicesSection from "@/components/sections/Services";
import { Separator } from "@/components/ui/separator";
import { GetClients } from "@/actions/GetClients";
import ClientsSection from "@/components/sections/Clients";
import { GetBusinessProfile } from "@/actions/GetBusinessProfile";
import BusinessProfile from "@/components/sections/BusinessProfile";
import Footer from "@/components/Footer";

export default async function Home() {
  const title = await GetTitle();
  const employees = (await GetEmployees()).sort((a, b) => a.order - b.order);
  const portfolio = (await GetPortfolio()).sort((a, b) => a.order - b.order);
  const services = (await GetServices()).sort((a, b) => a.order - b.order);
  const clients = (await GetClients()).sort((a, b) => a.order - b.order);
  const businessProfile = await GetBusinessProfile();

  return (
    <main className="overflow-x-hidden space-y-10">
      <HomeSection employees={employees} title={title[0]} />
      <Separator />

      <PortfolioSection portfolio={portfolio} />
      <Separator />

      <ServicesSection services={services} />
      <Separator />

      <EmployeesSection employees={employees} />
      <Separator />

      <ClientsSection clients={clients} />
      <Separator />

      <BusinessProfile businessProfile={businessProfile[0]} />

      <Footer />
    </main>
  );
}
