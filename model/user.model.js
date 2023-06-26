const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  Full_Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Regex to validate email format
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
      },
      message: "Invalid email address",
    },
  },
  Password: {
    type: String,
    required: true,
  },
});


const User = mongoose.model("User", userSchema);

module.exports = User;
