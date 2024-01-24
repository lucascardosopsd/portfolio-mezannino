export default {
  name: "businessProfile",
  type: "document",
  title: "Perfil da Empresa",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nome",
    },
    {
      name: "history",
      type: "text",
      title: "História",
    },
    {
      name: "address",
      type: "string",
      title: "Endereço",
    },
    {
      name: "hours",
      type: "string",
      title: "Horários",
    },
    {
      name: "email",
      type: "string",
      title: "E-mail",
    },
    {
      name: "phones",
      type: "array",
      title: "Telefones",
      of: [
        {
          name: "hour",
          type: "string",
          title: "Horário",
        },
      ],
    },
    {
      name: "mapsLink",
      type: "string",
      title: "Link do Maps",
    },
    {
      name: "mapsPrint",
      type: "image",
      title: "Print do Maps",
    },
  ],
};
