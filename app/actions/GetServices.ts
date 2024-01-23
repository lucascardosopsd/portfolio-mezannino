import { client } from "@/sanity/lib/client";
import { ServiceProps } from "@/types/service";

export const GetServices = async () => {
  const query = `
    *[_type == "services"]{
        order,
        title,
        "image": image.asset->url,
    }
    `;

  return (await client.fetch(query)) as ServiceProps[];
};
