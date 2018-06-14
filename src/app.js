import Express from "express";
import BodyParser from "body-parser";
import http from "http";
import cors from "cors";
import path from "path";
import "dotenv/config";
import "@babel/polyfill";
import setDBConnections from "./config/database";
/**
 *  Import controller routes for app
 */
import setAppRoutes from "./routes";
import errorHandler from "./error.handler";
/**
 *  Create a Express APP
 */
const app = Express();

const server = http.createServer(app);

/**
 *  Setup Sockets
 */
app.use("/static", Express.static(path.join(__dirname, "../public")));

app.use(BodyParser.json());
app.use(cors({ origin: "*" }));

app.use((req, response, next) => {
  // Website you wish to allow to connect
  response.header("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  response.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  response.setHeader("Access-Control-Allow-Credentials", false);

  // Pass to next layer of middleware
  next();
});

/**
 *  App Routes
 */

setAppRoutes(app);

app.get("*", (request, response) => {
  response.status(404).send({ success: false, message: "Resource not found" });
});

/**
 *  Error Handling
 */

app.use(errorHandler);

const startServer = database => {
  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`Connected on port ${port}...: http://localhost:${port}`);
  });
};

/**
 *  Connect to DB
 */

setDBConnections(["mongo"], startServer);
