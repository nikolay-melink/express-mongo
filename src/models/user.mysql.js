import Sequelize, { INTEGER, STRING } from "sequelize";
import { connectionString } from "../config/database/mysql";

/**
 *
 * MYSQL USER MODEL
 * @param {*} sequelize
 * @param {*} Sequelize
 */

const sequelize = new Sequelize(connectionString, {
  operatorsAliases: false
});

const User = sequelize.define("user", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  Username: { type: STRING, primaryKey: true, allowNull: false },
  Password: STRING
});

User.sync()
  .then(() => {
    console.log("New table created");
  })
  .finally(() => {
    // sequelize.close();
  });

User.drop()
  .then(() => {
    console.log("table deleted");
  })
  .finally(() => {
    // sequelize.close();
  });

export default User;
