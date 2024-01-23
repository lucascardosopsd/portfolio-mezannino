export default {
  name: "employee",
  type: "document",
  title: "Profissionais",
  fields: [
    {
      name: "order",
      type: "number",
      title: "Posição",
    },
    {
      name: "name",
      type: "string",
      title: "Nome",
    },
    {
      name: "pic",
      type: "image",
      title: "Foto",
    },
    {
      name: "bio",
      type: "string",
      title: "Bio",
    },
  ],
};
