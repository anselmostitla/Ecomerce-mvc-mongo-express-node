const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require:true,
    unique: true
  },
  pass: {
    type: String,
    require: true,
    select: false
  }
})

const UserModel = mongoose.model("User", UserSchema) 

module.exports = UserModel