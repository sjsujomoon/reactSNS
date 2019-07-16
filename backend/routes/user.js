const express = require("express")
const bcrypt = require("bcrypt")
const db = require("../models")
const router = express.Router()

router.get("/", (request, response) => {

})

router.post("/", (request, response, next) => {
  try {
    const existingUser = await db.User.findOne({
      where: {
        userId: request.body.userId
      }
    })
    if (existingUser) {
      return response.status(403).send("User ID already exists")
    }
    const hashedPassword = await bcrypt.hash(request.body.password, 12)
    const newUser = await db.User.create({
      name: request.body.name,
      userId: request.body.userId,
      password: hashedPassword
    })
    console.log("newUser", newUser)
    return response.status(200).json(newUser)
  } catch (error) {
    console.error(error)
    return next(error)
  }
})

router.get("/:id", (request, response) => {

})

router.post("/login", (request, response) => {

})

router.post("/logout", (request, response) => {

})

router.get("/:id/follow", (request, response) => {

})

router.post("/:id/follow", (request, response) => {

})

router.delete("/:id/follow", (request, response) => {

})

router.delete("/:id/follower", (request, response) => {

})

router.get("/:id/posts", (request, response) => {

})

module.exports = router
