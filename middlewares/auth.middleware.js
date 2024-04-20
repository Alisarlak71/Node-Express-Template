const auth = require("../config/auth.config");
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
  
  if (token == null) return res.json({ message: "توکن احراز هویت تنظیم نشده است !" }).status(401)

  jwt.verify(token, auth.secret, (err, user) => {
    if (err) {
      return res.json({ message: "احراز هویت نشده!" }).status(401)
    }
    req.user = user;
    next();
  });
}