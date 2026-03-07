const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

let stocks = {
  AAPL: 150,
  GOOG: 2800,
  TSLA: 700
};

app.get("/stocks", (req, res) => {
  res.json(stocks);
});

function updateStockPrices() {

  Object.keys(stocks).forEach((symbol) => {
    const change = (Math.random() * 10 - 5);
    stocks[symbol] = parseFloat((stocks[symbol] + change).toFixed(2));
  });

  io.emit("stockUpdate", stocks);
}

setInterval(updateStockPrices, 5000);

io.on("connection", (socket) => {
  console.log("User connected");

  socket.emit("stockUpdate", stocks);

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});