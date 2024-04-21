const auth = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const ExceptionHandler = require("../exceptions/handler.exception");
module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    next(new ExceptionHandler("توکن احراز هویت تنظیم نشده است !", 401));
    return;
  }

  jwt.verify(token, auth.secret, (err, user) => {
    if (err) {
      next(new ExceptionHandler("احراز هویت نشده!", 401));
    }
    req.user = user;
    next();
  });
};
