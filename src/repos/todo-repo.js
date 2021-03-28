const pool = require("../pool.js");

class todoRepo {
  static find = async () => {
    const { rows } = await pool.query("SELECT * FROM todos;");
    return rows;
  };

  static findById = async (id) => {
    const { rows } = await pool.query("SELECT * FROM todos WHERE id = $1;", [
      id,
    ]);
    return rows;
  };

  static create = async (body, username) => {
    const {
      rows,
    } = await pool.query(
      "INSERT INTO todos (body, username) VALUES ($1, $2) RETURNING *;",
      [body, username]
    );
    return rows;
  };

  static update = async (body, username, id) => {
    const {
      rows,
    } = await pool.query(
      "UPDATE todos SET body = $1, username = $2 WHERE id = $3 RETURNING *;",
      [body, username, id]
    );
    return rows;
  };

  static delete = async (id) => {
    const {
      rows,
    } = await pool.query("DELETE FROM todos WHERE id = $1 RETURNING *", [id]);
    return rows;
  };
}

module.exports = todoRepo;
