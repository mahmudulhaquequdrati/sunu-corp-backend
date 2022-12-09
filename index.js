const express = require("express");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();

// socket
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const port = process.env.PORT || 5000;

// make http server
const httpServer = createServer(app);

// make socket
const io = new Server(httpServer, {
  cors: { origin: " *" },
  /* options */
});

mongoose.set("strictQuery", false);
const connectDB = require("./config/dbConnect");
connectDB();
// middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// routes
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
app.use("/", router);
app.use("/api", userRouter);

mongoose.connection.once("open", () => {
  httpServer.listen(port, () => console.log(`server is running port ${port}`));
  // socket connection
  io.on("connection", (socket) => {
    // console.log("a user connected");
    // ...

    socket.on("datas", (data) => {
      // * send this data to admin dashboard
      socket.broadcast.emit("userInfo", data);

      // console.log(data);
      // io.emit("message", data);
    });

    socket.on("disconnect", () => {
      // console.log("user disconnected");
    });
  });
});
