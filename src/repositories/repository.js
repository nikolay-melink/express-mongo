/**
 *
 *  BASE REPOSITORY
 *
 */

export default class Repository {
  /**
   *  REPO CONSTRUCTOR
   *  Repo will accept the model instance for any ORM or plain object
   *  and it will process the methods on it
   */
  constructor(model) {
    this.model = model;
  }

  /**
   *
   *  GET OPERATION
   *  Get Operation for a model instance
   *  Takes in [ID] unique identifier [RELATIONS] which will return the relations
   *  objects along with model instance
   *
   *  returns single object
   */

  get = async (id, relations) => {
    const result = await this.model.get(id, relations);
    return result;
  };

  /***
   *  GET ALL
   *  return <Model>results
   */

  all = async relations => {
    const results = await this.model.all(relations);
    return results;
  };
  /**
   *  ADD OPERATION
   */
  add = async post => {
    const result = await this.model.set(post);
    return result;
  };

  /**
   *  REMOVE OPERATION
   */

  remove = async id => {
    const result = await this.model.remove(id);
    return result;
  };
  /**
   *  UPDATE OPERATION
   */

  update = async (id, post) => {
    const result = await this.model.update(id, post);
    return result;
  };

  /**
   *  SEARCH OPERATION
   */

  search = async query => {
    const results = await this.model.search(query);
    return results;
  };
}
