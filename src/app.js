const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo");

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.get("/", (req, res) => res.send("Hello from my first api"));
  app.use("/todos", todoRouter);

  return app;
};
