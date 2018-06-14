/**
 *
 *  USER MYSQL ROUTES
 *
 */

import model from "../models/user.mysql";
import setBaseRoutes from "./routes.base";

import Repository from "../repositories/user.mysql.respository";
import Controller from "../controllers/user.controller";

const router = setBaseRoutes(new Controller(new Repository(model)));

export default router;
