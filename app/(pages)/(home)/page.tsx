import { GetEmployees } from "@/actions/GetEmployees";
import { GetPortfolio } from "@/actions/GetPortfolio";
import { GetServices } from "@/actions/GetServices";
import { GetTitle } from "@/actions/GetTitle";
import MainWrapper from "@/components/MainWrapper";

export default async function Home() {
  const title = await GetTitle();
  const employees = (await GetEmployees()).sort((a, b) => a.order - b.order);
  const portfolio = (await GetPortfolio()).sort((a, b) => a.order - b.order);
  const services = (await GetServices()).sort((a, b) => a.order - b.order);

  return (
    <main className="relative">
      <MainWrapper
        title={title[0]}
        employees={employees}
        portfolio={portfolio}
        services={services}
      />
    </main>
  );
}
