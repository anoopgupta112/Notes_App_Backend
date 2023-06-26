

const mongoose = require("mongoose");

const userRoute = require("./routes/user.route")
const DashboardRoute = require("./routes/dashboard.route")
const express = require("express");
const cors = require("cors")
const app = express();
const model = require("./model/user.model")

app.use(cors());


app.use(express.json())

mongoose.connect(
    "mongodb://127.0.0.1:27017/TodoList",
    { useNewUrlParser: true, useUnifiedTopology: true}).then(db => {
      console.log("Database connected");

    }).catch(error => console.log("Could not connect to mongo db " + error));

DashboardRoute(app);
userRoute(app)

app.listen(2000, () => {

    console.log(" app is runing on port " + 2000);

})
