import dotenv from "dotenv";
import { Client } from "@notionhq/client";
dotenv.config();

const notion = new Client({
    auth: process.env.NOTION_KEY,
  });

  const page_Id = '0750666b7a214f828b7f62a54c761f98' ;

  const updatePage = async () => {
    const response = await notion.pages.update({
        page_id: page_Id,
        properties: {
          'OT': {
            number: 25,
          },
        },
      });
      console.log(response);
  }  
updatePage();