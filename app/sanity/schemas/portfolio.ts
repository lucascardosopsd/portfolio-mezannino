export default {
  name: "portfolio",
  type: "document",
  title: "Projetos",
  fields: [
    {
      name: "order",
      type: "number",
      title: "Posição",
    },
    {
      name: "title",
      type: "string",
      title: "Título",
    },
    {
      name: "pic",
      type: "image",
      title: "Foto",
    },
    {
      name: "description",
      type: "text",
      title: "Descrição",
    },
  ],
};
