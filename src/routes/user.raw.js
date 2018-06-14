/**
 *
 *  USER RAW ROUTES
 *
 */

import Model from "../models/person.raw";
import setBaseRoutes from "./routes.base";
import userData from "../data/user";

import Repository from "../repositories/repository";
import Controller from "../controllers/user.controller";

const router = setBaseRoutes(
  new Controller(new Repository(new Model(userData)))
);

export default router;
