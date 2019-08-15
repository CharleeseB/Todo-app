// const http = require("http");
const Todo = require("./Models/Todo");
const express = require("express");
const app = express();
const port = 3000;
const user = require("./Models/user");

app.use(express.urlencoded({ extended: true }));

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

app.get("/users", (req, res) => {
  const allUsers = user.getAll();
  allUsers.then(data => {
    res.json(data);
  });
});

app.get("/users/:userId", (req, res) => {
  const theId = parseInt(req.params.userId, 10);
  const aUser = user.getOne(theId);
  aUser.then(data => {
    res.json(data);
  });
});

app.post("/users", async (req, res) => {
  console.log("we got a post request");

  console.log("here is the BODY");
  console.log(req.body);

  const newUserInfo = await user.createUser({
    displayname: req.body.displayname,
    username: req.body.username
  });
  res.json(newUserInfo);
});

app.post("/users/:userId/todos", async (req, res) => {
  const newTodo = await Todo.createTodo({
    priority: req.body.priority,
    task: req.body.task,
    status: req.body.status,
    user_id: req.body.userId
  });
  res.json(newTodo);
});

app.listen(port);
