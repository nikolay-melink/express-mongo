/**
 *
 *  RAW MODEL DEMO
 *
 */

export default class UserModel {
  constructor(userData) {
    this.collection = userData || [];
  }

  set = post => {
    const newPost = { id: this.collection.length + 1, ...post };
    this.collection.push(newPost);
    return newPost;
  };

  get = id => {
    const user = this.collection.find(user => user.id === id);
    if (user) {
      return user;
    }
    return {};
  };

  all = () => this.collection;
  remove = id => {
    const user = this.collection.findIndex(user => user.id === id);
    if (user) {
      this.collection.splice(user, 1);
      return { id, status: 200, message: "Deleted" };
    }
    return { id, status: 404, message: "Not Found" };
  };
  update = () => {};
  search = () => {};
}
