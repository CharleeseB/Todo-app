const db = require("../db");

async function getAll() {
  const todosForAll = await db.any(
    `
SELECT *
FROM todos
`
  );
  return todosForAll;
}
async function getOne(id) {
  const oneTodo = await db.one(
    `
    select * from todos where id=$1
    `,
    [id]
  );
  return oneTodo;
}

async function createTodo({ priority, task, status, user_id }) {
  const todo = await db.one(
    `
  insert into todos 
  (priority,task,status,user_id)
  values ($1,$2,$3,$4)


  returning id
  `,
    [priority, task, status, user_id]
  );
  console.log(todo.id);
  return todo;
}

module.exports = {
  getAll,
  getOne,
  createTodo
};
