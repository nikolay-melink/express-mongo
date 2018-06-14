/**
 *
 *  EXPRESS ERROR HANDLER
 *
 */

export default (error, req, res, next) => {
  res.status(500).send({
    succes: false,
    error,
    status: 500,
    message: "Something went wrong on server"
  });
};
