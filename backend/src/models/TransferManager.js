const AbstractManager = require("./AbstractManager");

class transferManager extends AbstractManager {
  constructor() {
    super({ table: "transfer" });
  }

  insert(transfer) {
    return this.connection.query(
      `insert into ${this.table} (nb_vehicles, time, silo_id_from, silo_id_to) values (?,?,?,?)`,
      [
        transfer.nb_vehicles,
        transfer.time,
        transfer.silo_id_from,
        transfer.silo_id_to,
      ]
    );
  }

  update(transfer) {
    return this.connection.query(
      `update ${this.table} set nb_vehicles = ?, time = ?, silo_id_from = ?, silo_id_to = ? where id = ?`,
      [
        transfer.nb_vehicles,
        transfer.time,
        transfer.silo_id_from,
        transfer.silo_id_to,
        transfer.id,
      ]
    );
  }
}

module.exports = transferManager;
