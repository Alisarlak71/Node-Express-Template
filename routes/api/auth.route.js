var router = require("express").Router();
const { login } = require("../../controllers/auth.controller");

/**
 * @swagger
 *
 * /api/v1/auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: ورود کاربر
 *     description: ورود کاربر 
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:         
 *               username:
 *                 type: string
 *                 example: "alisarlak71"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: پاسخ موفق       
 */
router.post("/login", login);
module.exports = router;
