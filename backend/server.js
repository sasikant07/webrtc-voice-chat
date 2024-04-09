require("dotenv").config();
const express = require("express");
const cors = require("cors");
const DBConnect = require("./database");
const router = require("./routes");

const app = express();
app.use(express.json());

const corsOption = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 8080;

app.use(router);

DBConnect();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
