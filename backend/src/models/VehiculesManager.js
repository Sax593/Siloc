const AbstractManager = require("./AbstractManager");

class VehiculesManager extends AbstractManager {
  constructor() {
    super({ table: "vehicules" });
  }

  insert(vehicules) {
    return this.connection.query(
      `insert into ${this.table} (brand, model, mileage, lastrent, disponibility_id, fleet_id, type) values (?,?,?,?,?,?,?)`,
      [
        vehicules.brand,
        vehicules.model,
        vehicules.mileage,
        vehicules.lastrent,
        vehicules.disponibility_id,
        vehicules.fleet_id,
        vehicules.type,
      ]
    );
  }

  update(vehicules) {
    return this.connection.query(
      `update ${this.table} set brand=?, model=?, mileage=?, lastrent=?, disponibility_id=?, fleet_id=?, type=? where id = ?`,
      [
        vehicules.brand,
        vehicules.model,
        vehicules.mileage,
        vehicules.lastrent,
        vehicules.disponibility_id,
        vehicules.fleet_id,
        vehicules.type,
        vehicules.id,
      ]
    );
  }
}

module.exports = VehiculesManager;
