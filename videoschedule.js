import dotenv from "dotenv";
import { Client } from "@notionhq/client";
dotenv.config();

// Init client
const notion = new Client({
  auth: process.env.NOTION_KEY,
});

const database_id = process.env.NOTION_DATABASE_ID;

// const queryDatabase = async () => {
//   const response = await notion.databases.query({
//       database_id: database_id
//     });

//   console.log(response);
//   notion.request.
// };

// queryDatabase();

const getVideos = async (req,res) => {
  const payload = {
    path: `databases/${database_id}/query`,
    method: "POST",
  };

  const { results } = await notion.request(payload);

  // console.log(results); // only the general objects

  // const videos = results.map((page) => {
  //     console.log(page);
  // });
//   try {
    const videos = results.map((page) => {
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
    console.log(videos);
//   } catch (error) {
//       res.status(500).json({
//             message: "Error al obtener los videos",
//       });
//   }
};

getVideos();
