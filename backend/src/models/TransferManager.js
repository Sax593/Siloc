const AbstractManager = require("./AbstractManager");

class transferManager extends AbstractManager {
  constructor() {
    super({ table: "transfer" });
  }

  insert(transfer) {
    return this.connection.query(
      `insert into ${this.table} (nb_vehicles, time, silo_id) values (?,?,?)`,
      [transfer.nb_vehicles, transfer.time, transfer.silo_id]
    );
  }

  update(transfer) {
    return this.connection.query(
      `update ${this.table} set nb_vehicles = ?, time = ?, silo_id = ? where id = ?`,
      [transfer.nb_vehicles, transfer.time, transfer.silo_id, transfer.id]
    );
  }
}

module.exports = transferManager;
