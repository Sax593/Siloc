const AbstractManager = require("./AbstractManager");

class vehiculesManager extends AbstractManager {
  constructor() {
    super({ table: "vehicules" });
  }

  insert(vehicules) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [vehicules.title]
    );
  }

  update(vehicules) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [vehicules.title, vehicules.id]
    );
  }
}

module.exports = vehiculesManager;
