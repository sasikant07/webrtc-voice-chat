require("dotenv").config();
const express = require("express");
const DBConnect = require("./database");
const router = require("./routes");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use(router);

DBConnect();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
