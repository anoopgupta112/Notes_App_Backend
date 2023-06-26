const userController = require("../controller/user.controller")

module.exports = app => {

  
  // to sign in and up
    app.post("/SignIn", userController.SignIn)
    app.post("/SignUp", userController.SignUp)

}