/**
 *
 *  RESTFUL CONTROLLER ABSTRACTION
 *
 * @param {*} Model
 */
import { Router } from "express";

const setBaseRoutes = (controller, router = Router()) => {
  const { set, get, all, destroy, put, search } = controller;
  router.post("/Search", search);
  router.post("/", set);
  router.get("/:id", get);
  router.put("/:id", put);
  router.get("/", all);
  router.delete("/", destroy);
  return router;
};

export default setBaseRoutes;
