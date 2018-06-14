import socketIo from "socket.io";
import { registerListeners, register } from "./events";

/**
 *  EXPRESS SOCKET SETUP
 */

let ioServer;

/**
 *  REGISTER SCHEMAS ON CONNECTION
 * @param {*} socket
 */

/**
 *  SETUP SOCKET WITH HTTP SERVER
 */

export default server => {
  ioServer = socketIo(server, {
    handlePreflightRequest: (request, response) => {
      const headers = {
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Origin": request.headers.origin, //or the specific origin you want to give access to,
        "Access-Control-Allow-Credentials": true
      };
      response.writeHead(200, headers);
      response.end();
    }
  });

  /** REGISTER APP EVENTS */

  register(ioServer);

  ioServer.origins((origin, callback) => callback(null, true));

  ioServer.on("connection", socket => {
    socket.address = `${socket.request.connection.remoteAddress} : ${socket.request.connection.remotePort}`;

    socket.connectedAt = new Date();
    socket.log = (...data) => {
      console.log(`SocketIO ${socket.address}`, ...data);
    };
    socket.on("disconnect", () => {
      socket.log("Disconnected: ");
    });
    socket.log("New connection: ");
    registerListeners(socket);
  });
};

export const io = ioServer;
