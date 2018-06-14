import Controller from "./controller";
/**
 *
 *  USER CONTROLLER GENERICS
 */
export default class UserController extends Controller {
  constructor(repository) {
    super(repository);
    this.repository = repository;
  }
}
