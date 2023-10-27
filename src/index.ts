import fs from "fs";

let lineData: string[] = [];

//http://localhost:9091/api/v1/images/?board_id=none&categories=general&is_intermediate=false&limit=100&offset=0

(async () => {
  const itemsQuery = new URLSearchParams({
    board_id: "none",
    categories: "general",
    is_intermediate: "false",
    limit: "1000",
    offset: "0",
  });

  const itemsResp = await fetch(
    `http://localhost:9091/api/v1/images/?${itemsQuery.toString()}`
  );
  const items = await itemsResp.json();
  console.log("items:", items);
})();

const fileContent = lineData.join("\n");
fs.writeFileSync(`./output/all.csv`, fileContent);
