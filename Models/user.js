const db = require("../db");

function getAll() {
  return db
    .any(
      `
select * from users
`
    )
    .catch(err => {
      console.log("error getting users.");
      console.log(err);
    });
}

function getOne(id) {
  return db
    .one(
      `
    select * from users where id=$1
    `,
      [id]
    )
    .then(user => {
      const todos = db
        .any(
          `
        select * from todos where user_id=$1
        `,
          [id]
        )
        .then(todosForUser => {
          console.log(todosForUser);
          user.todos = todosForUser;
          return user;
        });

      return todos;
    })
    .catch(err => {
      console.log("error getting user.");
      console.log(err);
    });
}

module.exports = {
  getAll,
  getOne
};
