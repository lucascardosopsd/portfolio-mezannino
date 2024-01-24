import { client } from "@/sanity/lib/client";

export const GetBusinessProfile = async () => {
  const query = `
  *[_type == "businessProfile"] {
    name,
    history,
    address,
    hours,
    email,
    phones[],
    mapsLink,
    "mapsPrint": mapsPrint.asset->url,
  }
  `;

  return (await client.fetch(query)) as BusinessProfileProps[];
};
