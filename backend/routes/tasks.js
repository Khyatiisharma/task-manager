const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all tasks
router.get("/", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// ADD task
router.post("/", (req, res) => {
  const { title } = req.body;
  db.query("INSERT INTO tasks (title) VALUES (?)", [title], (err) => {
    if (err) throw err;
    res.send("Task added");
  });
});

// DELETE task
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM tasks WHERE id = ?", [req.params.id], (err) => {
    if (err) throw err;
    res.send("Task deleted");
  });
});

module.exports = router;
