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

  findAllVehicules(siloid) {
    return this.connection.query(
      `SELECT ${this.table}.id as id_vehicules, brand, model, mileage, disponibility_id, type, id_silo, silo.name, silo.localisation FROM ${this.table}
      INNER JOIN silo on ${this.table}.id_silo = silo.id where silo.id = ? LIMIT 10`,
      [siloid]
    );
  }
}

module.exports = VehiculesManager;
