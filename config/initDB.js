const { default: mongoose } = require("mongoose")

require("dotenv").config()
const uri = process.env.MONGO_URL

const connector = async () => {
  try {
    await mongoose.connect(uri)
  } catch (error) {
    console.log(error)
  }
  
}

module.exports = connector