import { GetEmployees } from "@/actions/GetEmployees";
import { GetTitle } from "@/actions/GetTitle";
import MainWrapper from "@/components/MainWrapper";

export default async function Home() {
  const title = await GetTitle();
  const employees = (await GetEmployees()).sort((a, b) => a.order - b.order);

  return (
    <main className="relative overflow-hidden">
      <MainWrapper title={title[0]} employees={employees} />
    </main>
  );
}
