import dotenv from "dotenv";
import { Client } from "@notionhq/client";
dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

const page_Id = "0750666b7a214f828b7f62a54c761f98";

const pageQuery = async () => {
  const results = [await notion.pages.retrieve({ page_id: page_Id })];

  const pageMap = results.map((page) => {
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
  console.log(results);
};
pageQuery();
