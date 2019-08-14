const http = require("http");
const Todo = require("./Models/Todo");

const server = http.createServer((req, res) => {
  console.log("You Got a Request!");
  const allTodos = Todo.getAll();
  allTodos.then(data => {
    res.end(JSON.stringify(data));
  });
});

server.listen(3000);
