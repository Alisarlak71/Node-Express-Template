const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");
const User = require("../models/user.model");
const { use } = require("../routes/api");
const ExceptionHandler = require("../exceptions/handler.exception");

const login = async (req, res,next) => {
  let user = await User.findOne({ username: req.body.username });

  if (user && user.password == req.body.password) {
    user = user.toJSON();
    delete user.password;
    const token = jwt.sign(user, authConfig.secret, {
      expiresIn: authConfig.ttl,
    });

    return res.json({ token: token, user: user });
  } else {
      next(new ExceptionHandler("نام کاربری یا رمز عبور اشتباه است!",401))
  }
};

const test = async (req, res,next) => {

    const token = jwt.sign({}, authConfig.secret, {
      expiresIn: authConfig.ttl,
    });

    return res.json({ token: token});
};

module.exports = { login , test };
