require("dotenv").config();
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_KEY });

(async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;

  const {results} = await notion.databases.query({
    database_id: databaseId,
  });
  

    const data = results.map((page) => {
      return {
        id: page.id,
        titulo: page.properties.Name.title[0].text.content,
        patente: page.properties.PATENTE.rich_text[0].text.content,
      };
    });
  console.log(results);
})();