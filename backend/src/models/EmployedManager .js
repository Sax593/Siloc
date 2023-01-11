const AbstractManager = require("./AbstractManager");

class employedManager extends AbstractManager {
  constructor() {
    super({ table: "employed" });
  }

  insert(employed) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [employed.title]
    );
  }

  update(employed) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [employed.title, employed.id]
    );
  }
}

module.exports = employedManager;
