const AbstractManager = require("./AbstractManager");

class siloManager extends AbstractManager {
  constructor() {
    super({ table: "silo" });
  }

  insert(silo) {
    return this.connection.query(
      `insert into ${this.table} (name, localisation, capacity, max_capacity) values (?,?,?,?)`,
      [silo.name, silo.localisation, silo.capacity, silo.max_capacity]
    );
  }

  update(silo) {
    return this.connection.query(
      `update ${this.table} set name = ?, localisation=?, capacity=?, max_capacity=? where id = ?`,
      [silo.name, silo.localisation, silo.capacity, silo.max_capacity, silo.id]
    );
  }
}

module.exports = siloManager;
