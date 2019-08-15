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

module.exports = {
  getAll,
  getOne
};
