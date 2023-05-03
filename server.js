const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log("Hello");
});

io.on("connection", (socket) => {
  console.log("a user connected with socket id", socket.id);

  socket.on("disconnect", (socket) => {
    console.log("user disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});
const PORT = 3000;
http.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
