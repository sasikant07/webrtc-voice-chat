require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const DBConnect = require("./database");
const router = require("./routes");
const ACTIONS = require("./actions");

const app = express();
app.use(express.json({ limit: "8mb" }));

app.use(cookieParser());

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

app.use("/storage", express.static("storage"));

const PORT = process.env.PORT || 8080;

app.use(router);

DBConnect();

//Sockets

const socketUserMapping = {};

io.on("connection", (socket) => {
  console.log("New Connection", socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, user }) => {
    socketUserMapping[socket.id] = user;

    const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
    clients.forEach((clientId) => {
      io.to(clientId).emit(ACTIONS.ADD_PEER, {});
    });

    socket.emit(ACTIONS.ADD_PEER, {});

    socket.join(roomId);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
