import dotenv from 'dotenv';
import { Client } from "@notionhq/client"

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

async function addItem() {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": "Yurts in Big Sur, California 2"
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem()