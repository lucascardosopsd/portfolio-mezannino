import { type SchemaTypeDefinition } from "sanity";
import title from "./schemas/title";
import employee from "./schemas/employee";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [title, employee],
};
