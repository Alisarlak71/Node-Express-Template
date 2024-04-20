var router = require("express").Router();
const {
  index,
  store,
  update,
  show,
  destroy,
} = require("../../controllers/user.controller");

const authMiddleware = require("../../middlewares/auth.middleware");
/**
 * @swagger
 *
 * /api/v1/users:
 *   get:
 *     tags:
 *        - Users
 *     summary: دریافت لیست کاربران
 *     description: لیست کاربران را دریافت می کند
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         description: شماره صفحه
 *         schema:
 *           type: integer
 *       - in: query
 *         name: per_page
 *         required: false
 *         description: تعداد در صفحه
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: پاسخ موفق
 */
router.get("/", authMiddleware, index);

/**
 * @swagger
 *
 * /api/v1/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: ایجاد کاربر
 *     description: ایجاد کاربر جدید
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: "ali"
 *               last_name:
 *                 type: string
 *                 example: "sarlak"
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
router.post("/", authMiddleware, store);

/**
 * @swagger
 *
 * /api/v1/users/{id}:
 *   get:
 *     tags:
 *        - Users
 *     summary:  نمایش اطلاعات یک کاربر
 *     description:  نمایش اطلاعات کاربر
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: شناسه یکتا کاربر
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: پاسخ موفق
 */
router.get("/:id", authMiddleware, show);

/**
 * @swagger
 *
 * /api/v1/users/{id}:
 *   put:
 *     tags:
 *        - Users
 *     summary:  ویرایش اطلاعات یک کاربر
 *     description:  ویرایش اطلاعات کاربر
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: شناسه یکتا کاربر
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: "ali"
 *               last_name:
 *                 type: string
 *                 example: "sarlak"
 *               username:
 *                 type: string
 *                 example: "alisarlak71"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: پاسخ موفق
 */
router.put("/:id", authMiddleware, update);

/**
 * @swagger
 *
 * /api/v1/users/{id}:
 *   delete:
 *     tags:
 *        - Users
 *     summary:  حذف یک کاربر
 *     description:  حذف یک کاربر با شناسه یکتا
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: شناسه یکتا کاربر
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: پاسخ موفق
 */
router.delete("/:id", authMiddleware, destroy);

module.exports = router;
