import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

async function atack() {
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      PATENTE: {
        type: "rich_text",
        rich_text: [
          {
            type: "text",
            text: {
              content: "cosa 3",
            },
          },
        ],
      },
      OT: {
        type: "number",
        number: 4123,
      },
      SERVICIO: {
        type: "rich_text",
        rich_text: [
          {
            type: "text",
            text: {
              content: "servicio 2",
            },
          },
        ],
      },
      FECHA: {
        type: "date",
        date: {
          start: "2021-11-26",
          end: null,
        },
      },
      "TIPO DE MANTENCIÓN": {
        type: "select",
        select: {
          name: "PREVENTIVA",
        },
      },
      VALOR: {
        type: "number",
        number: 20000,
      },
      Name: {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: "oli2",
            },
          },
        ],
      },
    },
  });
  console.log(response);
}

atack();
