const AbstractManager = require("./AbstractManager");

class bookingManager extends AbstractManager {
  constructor() {
    super({ table: "booking" });
  }

  insert(booking) {
    return this.connection.query(
      `insert into ${this.table} (vehicle_type, departure_time, arrival_time, silo_id, users_id) values (?,?,?,?,?)`,
      [
        booking.vehicle_type,
        booking.departure_time,
        booking.arrival_time,
        booking.silo_id,
        booking.users_id,
      ]
    );
  }

  update(booking) {
    return this.connection.query(
      `update ${this.table} set vehicle_type = ?, departure_time = ?, arrival_time = ?, silo_id = ?, users_id = ? where id = ?`,
      [
        booking.vehicle_type,
        booking.departure_time,
        booking.arrival_time,
        booking.silo_id,
        booking.users_id,
        booking.id,
      ]
    );
  }
}

module.exports = bookingManager;
