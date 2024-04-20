const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");
const User = require("../models/user.model");
const { use } = require("../routes/api");

const login = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });

  if (user && user.password == req.body.password) {
    user = user.toJSON();
    delete user.password;
    const token = jwt.sign(user, authConfig.secret, {
      expiresIn: authConfig.ttl,
    });

    return res.json({ token: token, user: user });
  } else {
    return res
      .status(401)
      .send({ error: "نام کاربری یا رمز عبور اشتباه است!" });
  }
};

module.exports = { login };
