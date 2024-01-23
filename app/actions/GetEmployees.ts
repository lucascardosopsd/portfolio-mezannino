import { client } from "@/sanity/lib/client";
import { EmployeeProps } from "@/types/employee";

export const GetEmployees = async () => {
  const query = `
  *[_type == "employee"] {
    order,
    name,
    bio,
    "pic": pic.asset->url,
  }
  `;

  return (await client.fetch(query)) as EmployeeProps[];
};
