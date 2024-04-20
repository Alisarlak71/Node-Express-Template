require('dotenv').config()
module.exports = {
    secret: process.env.SECRET_KEY,
    ttl: process.env.JWT_TTL
};