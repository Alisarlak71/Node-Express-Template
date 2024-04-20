var router = require('express').Router();

 /**
 * @swagger
 *
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *
 * security:
 *   - bearerAuth: []
 *
 */

router.use('/api/v1', require('./api'));

module.exports = router;