var router = require("express").Router();
const { login,test } = require("../../controllers/auth.controller");

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

/**
 * @swagger
 *
 * /api/v1/auth/login/test:
 *   get:
 *     tags:
 *       - Authentication
 *     summary: ورود کاربر
 *     description: ورود کاربر 
 */
router.get("/login/test", test);
module.exports = router;
