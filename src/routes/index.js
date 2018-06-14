/**
 *
 * SETUP APPLICATION ROUTES
 *
 */
import "express-group-routes";

import UserRouter from "./user.js";
import UserRaw from "./user.raw.js";
import UserMysql from "./user.mysql";

// import AddressRouter from "./address.js";

const setAppRoutes = app => {
  app.group("/api/v1", router => {
    router.use("/user", UserRouter);
    router.use("/user-custom", UserRaw);
    router.use("/user-mysql", UserMysql);
    // router.use("/Address", AddressRouter);
  });
};

export default setAppRoutes;
