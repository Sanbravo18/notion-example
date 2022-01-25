const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_VPGxLKKwdy36r8DcASPGHqoj813vusTXG7IOsztiQuo",
});

(async () => {
  const response = await notion.pages.create({
    parent: {
      database_id: "7245ff7e603140388cb301964fc3e8a1",
    },
    properties: {
      Nombre: {
        title: [
          {
            text: {
              content: "Tuscan Kale 2",
            },
          },
        ],
      },
      Marca: {
        rich_text: [
          {
            text: {
              content: "A dark green leafy vegetable",
            },
          },
        ],
      },
      Modelo: {
        rich_text: [
          {
            text: {
              content: "A dark green leafy vegetable",
            },
          },
        ],
      },
      Patente: {
        rich_text: [
          {
            text: {
              content: "A dark green leafy vegetable",
            },
          },
        ],
      },
      Año: {
        number: 2020,
      },
      "Tipo de equipo": {
        select: {
          name: "MAQUINARIAS",
        },
      },
      "N° SERIE / N° VIN": {
        rich_text: [
          {
            text: {
              content: " no null",
            },
          },
        ],
      },
    },
  });
  console.log(response);
})();
