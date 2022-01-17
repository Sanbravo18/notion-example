const dotenv = require("dotenv").config();
const { Client } = require("@notionhq/client");

// Init client
const notion = new Client({
  auth: process.env.NOTION_KEY,
});

const database_id = process.env.NOTION_DATABASE_ID;

const getVideos = async (req, res) => {
  const payload = {
    path: `databases/${database_id}/query`,
    method: "POST",
  };

  const { results } = await notion.request(payload);

  const items = results.map((page) => {
    return {
      id: page.id,
      titulo: page.properties.Name.title[0].text.content,
      FECHA: page.properties.FECHA.date.start,
      PATENTE: page.properties.PATENTE.rich_text[0].text.content,
      OT: page.properties.OT.number,
      SERVICIO: page.properties.SERVICIO.rich_text[0].text.content,
      MANTENCION: page.properties["TIPO DE MANTENCIÓN"].select.name,
      VALOR: page.properties.VALOR.number,
    };
  });
  const rta1 = items.filter(item => item.titulo === "olisupreme");

  console.log("rta3",rta1);
};

getVideos();
