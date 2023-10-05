const UserModel = require("../models/userM")

const createUser = async(req, res) => {
  const {email, pass} = req.body
  if(!email || !pass) return res.status(400).json("incomplete data")

  const foundEmail = await UserModel.findOne({email:email}) 
  // if(foundEmail) return res.json("will create...")

  return res.json(email)
}

module.exports = {createUser}