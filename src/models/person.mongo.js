/**
 *
 * PERSON SCHEME DEFINITION and MODEL
 *
 */

import Mongoose from "mongoose";

const UserSchema = new Mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Phone: { type: String, default: null },
  Photo: { type: String, default: null },

  CreateTimestamp: { type: Date, default: Date.now },
  UpdateTimestamp: { type: Date, default: Date.now }
});

const UserModel = Mongoose.model("User", UserSchema);

export default UserModel;
