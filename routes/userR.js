const express = require("express")
const router = express.Router()
const { createUser } = require("../controllers/userC")

router.post("/", createUser)

module.exports = router