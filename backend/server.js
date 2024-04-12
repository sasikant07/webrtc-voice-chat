require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const DBConnect = require("./database");
const router = require("./routes");

const app = express();
app.use(express.json({ limit: "8mb" }));

app.use(cookieParser());

const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

app.use("/storage", express.static("storage"));

const PORT = process.env.PORT || 8080;

app.use(router);

DBConnect();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
