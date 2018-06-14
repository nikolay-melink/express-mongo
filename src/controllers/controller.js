/**
 *
 *  RESTFUL CONTROLLER ABSTRACTION
 *
 * @param {*} respository
 */

export default class Controller {
  constructor(respository) {
    this.respository = respository;
  }

  /** Clean Relation Params */

  cleanParams = params => {
    return (
      (params &&
        params
          .split(",")
          .map(param => param.trim())
          .map(param => param.charAt(0).toUpperCase() + param.slice(1))) ||
      []
    );
  };

  /** Get model instance */

  get = async (request, response, next) => {
    try {
      const result = await this.respository.get(
        request.params.id,
        this.cleanParams(request.query.with)
      );

      if (!result) {
        response.status(404).json({
          message: `No ${this.respository.name || "record"} found`,
          code: 404
        });
      }
      response.json(result);
    } catch (error) {
      next(error);
    }
  };

  /** Get all models collection */

  all = async (request, response, next) => {
    try {
      const result = await this.respository.all(
        this.cleanParams(request.query.with)
      );
      response.send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  /** Set model instance */

  set = async (request, response, next) => {
    try {
      const result = await this.respository.add(request.body);
      response.send(result);
    } catch (error) {
      next(error);
    }
  };

  /** Delete model instance */
  destroy = async (request, response, next) => {
    try {
      const result = await this.respository.remove({ _id: request.body.id });
      response.send(result);
    } catch (error) {
      next(error);
    }
  };

  /** Update model instance */
  put = async (request, response, next) => {
    try {
      const result = await this.respository.update(
        request.params.id,
        request.body
      );
      response.send(result);
    } catch (error) {
      next(error);
    }
  };

  /** Search collections */

  search = async (request, response, next) => {
    try {
      const dbQuery = Object.assign({}, {}, request.body);
      const result = await this.respository.search(dbQuery);
      response.send(result);
    } catch (error) {
      next(error);
    }
  };
}
