const { Client } = require("@notionhq/client");
const dotenv = require("dotenv");

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_EQUIPMENTS_ID;

async function atack() {
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      "Nombre": {
        "title": [
          {
            "text": {
              "content": "Tuscan Kale 2"
            }
          }
        ]
      },
      "Marca": {
        "rich_text": [
          {
            "text": {
              "content": "A dark green leafy vegetable"
            }
          }
        ]
      },
      "Modelo": {
        "rich_text": [
          {
            "text": {
              "content": "A dark green leafy vegetable"
            }
          }
        ]
      },
      "Patente": {
        "rich_text": [
          {
            "text": {
              "content": "A dark green leafy vegetable"
            }
          }
        ]
      },
      "Año": {
        "number": 2020
      },
      "Tipo de equipo": {
        "select": {
          "name": "MAQUINARIAS"
        }
      },
      "N° SERIE / N° VIN": {
        "rich_text": [
          {
            "text": {
              "content": " no null"
            }
          }
        ]
      }
    }
  });
  console.log(response);
}

atack();
