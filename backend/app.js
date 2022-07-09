// create express server
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;

app.get("/", (req, res) => res.json({ result: "Health Check OK" }));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
