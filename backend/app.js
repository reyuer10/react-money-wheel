const express = require("express");
const cors = require("cors");
// const session = require("express-session");
// const ws = require("ws");
// const WebSocket = require("ws");
const app = express();
// const gameModifiedRoutes = require("./routes/gameModifiedRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   session({
//     key: "data",
//     secret: "reyuer",
//     resave: false,
//     saveUninitialized: false,
//     // cookie: {
//     //   maxAge: 10000,
//     // },
//   })
// );

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

// app.use("/api/baccarat", gameModifiedRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
