const express = require("express");
const todoRepo = require("../repos/todo-repo");

const router = express.Router();

// Get all the todos
router.get("/", async (req, res) => {
  // run a query to get all todos
  const todos = await todoRepo.find();

  // send result back to the person who made this request
  res.send(todos);
});

// Get todos by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await todoRepo.findById(id);

  if (todo) {
    res.send(todo);
  } else {
    res.sendStatus(404);
  }
});

// Create todo
router.post("/", async (req, res) => {
  const { body, username } = req.body;
  const todo = await todoRepo.create(body, username);

  if (todo) {
    res.send(todo);
  } else {
    res.sendStatus(404);
  }
});

// Update todo
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body, username } = req.body;
  const todo = await todoRepo.update(body, username, id);
  if (todo) {
    res.send(todo);
  } else {
    res.sendStatus(404);
  }
});

// Delete todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await todoRepo.delete(id);
  if (todo) {
    res.send(todo);
  } else {
    res.sendStatus(300);
  }
});

module.exports = router;
