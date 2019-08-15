// const http = require("http");
const Todo = require("./Models/Todo");
const express = require("express");
const app = express();
const port = 3000;

app.get("/todos", (req, res) => {
  console.log("You Got a Request!");
  const allTodos = Todo.getAll();

  allTodos.then(data => {
    // res.end(JSON.stringify(data));
    res.json(data);
  });
});
// How to translate
// const server = http.createServer((req, res) => {

app.get("/todos/:taskId", (req, res) => {
  console.log("You asked me something?");
  console.log(req.params.taskId);
  const theId = parseInt(req.params.taskId, 10);
  const aTodo = Todo.getOne(theId);
  aTodo.then(data => {
    res.json(data);
  });
});

app.listen(port);
