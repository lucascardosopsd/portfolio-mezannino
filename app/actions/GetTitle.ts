import { client } from "@/sanity/lib/client";

export const GetTitle = async () => {
  const query = `
    *[_type == "title"]{
        title,
        subTitle,
        description
    }
    `;

  return await client.fetch(query);
};
