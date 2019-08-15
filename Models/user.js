const db = require("../db");

async function getAll() {
  const users = await db.any(
    `
select * from users
`
  );
  return users;
}

async function getOne(id) {
  const user = await db.one(
    `
    select * from users where id=$1
    `,
    [id]
  );

  const todosForuser = await db.any(
    `
        select * from todos where user_id=$1
        `,
    [id]
  );

  user.todos = todosForuser;
  return user;
}
module.exports = {
  getAll,
  getOne
};
