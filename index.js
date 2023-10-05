const express = require("express")
const app = express()
require("dotenv").config()
const connector = require("./config/initDB")
const router = require("./routes/userR")
const bodyParser = require("body-parser")



app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get("/", (req,res) => {
  res.json("Y tu mama tambien...")
})

app.use("/api/v1/", router)


PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  connector()
  console.log(`server running on pport ${PORT}...`)
})