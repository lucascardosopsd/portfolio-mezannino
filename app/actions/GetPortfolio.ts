import { client } from "@/sanity/lib/client";
import { PortfolioProps } from "@/types/portfolio";

export const GetPortfolio = async () => {
  const query = `
    *[_type == "portfolio"]{
        order,
        title,
        description,
        "pic": pic.asset->url,
    }
    `;

  return (await client.fetch(query)) as PortfolioProps[];
};
