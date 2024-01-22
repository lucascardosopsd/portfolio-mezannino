import { GetTitle } from "@/actions/getTitle";
import MainWrapper from "@/components/MainWrapper";

export default async function Home() {
  const title = await GetTitle();

  return (
    <main>
      <MainWrapper title={title[0]} />
    </main>
  );
}
