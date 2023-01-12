const AbstractManager = require("./AbstractManager");

class transferManager extends AbstractManager {
  constructor() {
    super({ table: "transfer" });
  }

  insert(transfer) {
    return this.connection.query(
      `insert into ${this.table} (vehicle_type, departure_time, arrival_time, silo_id, users_id) values (?,?,?,?,?)`,
      [
        transfer.vehicle_type,
        transfer.departure_time,
        transfer.arrival_time,
        transfer.silo_id,
        transfer.users_id,
      ]
    );
  }

  update(transfer) {
    return this.connection.query(
      `update ${this.table} set vehicle_type = ?, departure_time = ?, arrival_time = ?, silo_id = ?, users_id = ? where id = ?`,
      [
        transfer.vehicle_type,
        transfer.departure_time,
        transfer.arrival_time,
        transfer.silo_id,
        transfer.users_id,
        transfer.id,
      ]
    );
  }
}

module.exports = transferManager;
