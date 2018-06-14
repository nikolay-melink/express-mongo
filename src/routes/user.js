/**
 *
 *  USER ROUTES
 *
 */

import model from "../models/person.mongo";
import setBaseRoutes from "./routes.base";

import Repository from "../repositories/user.repository";
import Controller from "../controllers/user.controller";

const router = setBaseRoutes(new Controller(new Repository(model)));

export default router;
