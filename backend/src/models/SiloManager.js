const AbstractManager = require("./AbstractManager");

class siloManager extends AbstractManager {
  constructor() {
    super({ table: "silo" });
  }

  insert(silo) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [silo.title]
    );
  }

  update(silo) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [silo.title, silo.id]
    );
  }
}

module.exports = siloManager;
