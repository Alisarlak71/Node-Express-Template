const router = require('express').Router();

const authMiddleware = require('../../middlewares/auth.middleware')

// router.use('/', require('./auth'));

router.use('/users', require('./users.route'));

module.exports = router;