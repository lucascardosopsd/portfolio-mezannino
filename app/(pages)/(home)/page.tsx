import { GetTitle } from "@/actions/GetTitle";
import MainWrapper from "@/components/MainWrapper";

export default async function Home() {
  const title = await GetTitle();

  return (
    <main className="relative">
      <MainWrapper title={title[0]} />
    </main>
  );
}
