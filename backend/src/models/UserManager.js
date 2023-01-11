const AbstractManager = require("./AbstractManager");

class usersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.connection.query(
      `insert into ${this.table} (email, firstname, lastname, hashedpassword, birthdate, address, rol_id, license) values (?,?,?,?,?,?,?,?)`,
      [
        users.email,
        users.firstname,
        users.lastname,
        users.hashedpassword,
        users.birthdate,
        users.adress,
        users.role_id,
        users.licence,
      ]
    );
  }

  update(users) {
    return this.connection.query(
      `update ${this.table} set email=?, firstname=?, lastname=?, hashedpassword=?, birthdate=?, address=?, rol_id=?, license=? where id = ?`,
      [
        users.email,
        users.firstname,
        users.lastname,
        users.hashedpassword,
        users.birthdate,
        users.adress,
        users.role_id,
        users.licence,
        users.id,
      ]
    );
  }
}

module.exports = usersManager;
