import { type SchemaTypeDefinition } from "sanity";
import title from "./schemas/title";
import employee from "./schemas/employee";
import portfolio from "./schemas/portfolio";
import service from "./schemas/service";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [title, employee, portfolio, service],
};
