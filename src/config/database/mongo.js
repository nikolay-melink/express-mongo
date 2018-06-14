import mongoose from "mongoose";
import chalk from "chalk";
/**
 *
 *  MONGOOSE CONNECTION
 *
 */

const {
  MONGO_CONNECTION_HOST: host,
  MONGO_CONNECTION_USER: user,
  MONGO_CONNECTION_PWD: pwd,
  MONGO_CONNECTION_DATABASE: db
} = process.env;

let userPwdString = ``;

if (user && pwd) {
  userPwdString = `${user}:${pwd}@`;
}

const connectionString = `mongodb://${userPwdString}${host}/${db}`;

export default async callback => {
  mongoose.Promise = Promise;

  try {
    const connect = await mongoose.connect(connectionString, {
      useNewUrlParser: true
    });
    callback && callback(true, connect);
  } catch (error) {
    console.log(
      chalk.red(
        `Could not establish a connection to MongoDB on @${connectionString}`
      )
    );
  }
};
