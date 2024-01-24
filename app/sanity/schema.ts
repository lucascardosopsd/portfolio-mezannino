import { type SchemaTypeDefinition } from "sanity";
import title from "./schemas/title";
import employee from "./schemas/employee";
import portfolio from "./schemas/portfolio";
import service from "./schemas/service";
import clients from "./schemas/clients";
import businessProfile from "./schemas/businessProfile";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [title, employee, portfolio, service, clients, businessProfile],
};
