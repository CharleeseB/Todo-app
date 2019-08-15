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

//  Accept an object arguement ao we have flexibility later on.
// That is , we can add more database columns
// without having to update all of our function calls.
async function createUser({ displayname, username }) {
  // const {displayname, username } = userDataObj;
  const id = await db.one(
    `
  insert into users
  (displayname, username)
  values ($1,$2)


  returning id



  `,
    [displayname, username]
  );

  return id;
}

// createUser({
//   displayname: " Lala",
//   username: "Lalalicious"
// });

module.exports = {
  getAll,
  getOne,
  createUser
};
