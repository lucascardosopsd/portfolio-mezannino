import { client } from "@/sanity/lib/client";
import { ClientProps } from "@/types/clients";

export const GetClients = async () => {
  const query = `
  *[_type == "clients"] {
    order,
    name,
    comment,
    social,
  }
  `;

  return (await client.fetch(query)) as ClientProps[];
};
