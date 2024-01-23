import { type SchemaTypeDefinition } from "sanity";
import title from "./schemas/title";
import employees from "./schemas/employees";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [title, employees],
};
