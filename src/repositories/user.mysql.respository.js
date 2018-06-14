import Repository from "./repository";
/**
 *
 *  USER MYSQL REPOSITORY GENERICS
 *
 * @param {*} model
 */

export default class UserRepository extends Repository {
  /**
   *  REPO CONSTRUCTOR
   */

  constructor(model) {
    super(model);
    this.model = model;
  }
  /**
   * @override add
   *  POST OPERATION
   */
  add = async post => {
    return 1;
  };

  /**
   * @override get
   *  GET OPERATION
   */

  get = async (id, relations) => {
    return id;
  };

  /***
   * @override all
   *  GET ALL
   *  return <Model>results
   */

  all = async relations => {
    const users = await this.model.findAll();
    return users;
  };

  remove = () => 1;
  update = () => 1;
  search = () => 1;
}
