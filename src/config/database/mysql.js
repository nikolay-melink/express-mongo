import mysql from "mysql2";
import chalk from "chalk";
/**
 *
 *  MYSQL CONNECTION
 *
 */

const {
  MYSQL_CONNECTION_HOST: host,
  MYSQL_CONNECTION_USER: user,
  MYSQL_CONNECTION_PWD: password,
  MYSQL_CONNECTION_DATABASE: database
} = process.env;

export const connectionString = `mysql://${user}:${password}@${host}/${database}`;

export default async callback => {
  const connParams = {
    host,
    user,
    password,
    database
  };

  try {
    const connection = await mysql.createConnection(connParams);
    connection.ping(err => {
      callback && callback(!err, connection);
    });
  } catch (error) {
    console.log(
      chalk.red(
        `Could not establish a connection to MYSQL SERVER:  ${err.stack}`
      )
    );
  }
};
