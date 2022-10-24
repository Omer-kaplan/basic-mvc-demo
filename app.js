const express = require("express");
const app = express();
const http = require('http');
const socket = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(socket);

const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.set("view engine", "ejs");

app.use("/", require("./routes/articles"));
app.use("/", require("./routes/test"));

socket.listen(port, () => {
  console.log(`\nserver is running on port ${port}\n`);
});
