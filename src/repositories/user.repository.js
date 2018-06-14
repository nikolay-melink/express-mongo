import Repository from "./repository";
/**
 *
 *  USER REPOSITORY GENERICS
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
    const result = await this.model.create(post);
    return result;
  };

  /**
   * @override get
   *  GET OPERATION
   */

  get = async (id, relations) => {
    const result = await this.model.get(id, relations);
    return result;
  };

  /***
   * @override all
   *  GET ALL
   *  return <Model>results
   */

  all = async relations => {
    const results = await this.model.find({}).populate(relations);
    return results;
  };

  remove = () => 1;
  update = () => 1;
  search = () => 1;
}
