const token = require("../middleware/auth");
const User = require("../model/user.model");

// Login

exports.SignIn = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.Email });
console.log(user._id)
    if (user != null) {
        if( req.body.Password == user.password){
        return res.status(200).json({
          rc: 0,
          token: token.generateToken({ tk_user_id: user._id }),
          user: user,
        });
      } else {
        return res.status(200).json({ rc: -1, msg: "invalid password" });
      }
    } else {
      return res.status(200).json({ rc: -1, msg : "Invalid email" });
    }
  } catch (err) {
    return res
      .status(200)
      .json({ rc: -1, err : err });
  }
};


exports.SignUp = async (req, res) => {
  try {
    const userData = req.body.userdata;

   const user = await User.create(userData);
   console.log(user)
    res.json({rc: 0,  token: token.generateToken({ tk_user_id: user._id }),   user: user });
  } catch (err) {
    return res
      .status(200)
      .json({ rc: -1, err : err });
  }
};
