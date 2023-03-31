const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let data = [
    {
      hamza: "hydgfh",
      djky: "ljkdyu",
    },
  ];
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
