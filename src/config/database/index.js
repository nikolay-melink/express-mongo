import chalk from "chalk";

import connectMONGO from "./mongo";
import connectMYSQL from "./mysql";

const dbms = {
  mysql: connectMYSQL,
  mongo: connectMONGO
};
/**
 * Start Connection
 * @param {*} dbm
 */
const startConnecting = async dbm => {
  const fallBack = () =>
    console.log(chalk.blue(`Connection Doesnt exists for ${dbm}`));

  console.log(chalk.gray(`Connecting ${dbm.toUpperCase()}...`));
  const startConnection = dbms[dbm] || fallBack;
  await startConnection((connected = false) => {
    let message = chalk.blue(
      `--- ${dbm.toUpperCase()} Connected Successfully.---`
    );
    if (!connected) {
      message = chalk.redBright(`${dbm.toUpperCase()} Failed to connect.`);
    }
    console.log(message);
  });
};

/**
 * Process Connection
 */
export default async (connections, callback) => {
  if (!connections) {
    const message = `No DB Provider Specified available provides are : [${Object.keys(
      dbms
    )}]`;
    console.log(chalk.yellowBright(message));
    callback && callback(message);
    return true;
  }
  if (Array.isArray(connections)) {
    for (const key in dbms) {
      if (connections.includes(key)) {
        await startConnecting(key);
      }
    }
  } else {
    if (typeof connections === "string") {
      await startConnecting(connections);
    }
  }
  callback && callback();
};
