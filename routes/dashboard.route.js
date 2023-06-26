const { validateToken } = require("../middleware/auth");
const dashboardController = require("../controller/dashboard.controller")

module.exports = app => {
    app.get("/:id/Notes", validateToken, dashboardController.checkNotes)
    app.post("/addNotes", validateToken, dashboardController.addNotes)
}