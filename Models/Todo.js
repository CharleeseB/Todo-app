const db = require("../db");

function getAll() {
  return db
    .any(
      `
SELECT *
FROM todos
`
    )

    .catch(error => {
      console.log(error);
    });
  // console.log(db)
}
function getOne(id) {
  return (
    db
      .one(
        `
    select * from todos where id=$1
    `,
        [id]
      )
      // .then(data => {
      //   console.log("Heres your data :");
      //   console.log(data);
      // })
      .catch(error => {
        console.log("UH OH");
        console.log(error);
      })
  );
}
module.exports = {
  getAll,
  getOne
};
