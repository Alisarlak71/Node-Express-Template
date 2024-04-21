var router = require("express").Router();
const {
  index,
  store,
  update,
  show,
  destroy,
} = require("../../controllers/user.controller");
const mongoose = require("mongoose");
const { body, param } = require("express-validator");

const authMiddleware = require("../../middlewares/auth.middleware");
const User = require('../../models/user.model');

const idValidator = param("id")
  .custom((value) => {
    if(!mongoose.Types.ObjectId.isValid(value))
      return Promise.reject("شناسه اشتباه است");
    return true;
  });

const createUsernameUniqueValidator = body("username").custom((value) => {
  return User.findOne({ username: value }).then((user) => {
    if (user) {
      return Promise.reject("نام کاربری قبلا استفاده شده است!");
    }
  });
});


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
 *       422:
 *         description: مقادیر ورودی اشتباه
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   example: [{ "type": "field","msg": "Invalid value","path": "first_name", "location": "body"}]
 */
router.post(
  "/",
  createUsernameUniqueValidator,
  body("first_name")
    .notEmpty()
    .withMessage("نام نمیتواند خالی باشد")
    .isString()
    .withMessage("نام باید از نوع رشته باشد"),
  body("last_name")
    .notEmpty()
    .withMessage("نام خانوادگی نمیتواند خالی باشد")
    .isString()
    .withMessage("نام خانوادگی باید از نوع رشته باشد"),
  body("username")
    .notEmpty()
    .withMessage("نام کاربری نمیتواند خالی باشد")
    .isString()
    .withMessage("نام کاربری باید از نوع رشته باشد"),
  body("password")
    .notEmpty()
    .withMessage("کلمه عبور نمیتواند خالی باشد")
    .isString()
    .withMessage("کلمه عبور باید از نوع رشته باشد"),
  authMiddleware,
  store
);

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
router.get("/:id", idValidator, authMiddleware, show);

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
router.put(
  "/:id",
  idValidator,
  createUsernameUniqueValidator,
  body("first_name")
    .optional()
    .isString()
    .withMessage("نام باید از نوع رشته باشد"),
  body("last_name")
    .optional()
    .isString()
    .withMessage("نام خانوادگی باید از نوع رشته باشد"),
  body("username")
    .optional()
    .isString()
    .withMessage("نام کاربری باید از نوع رشته باشد"),
  body("password")
    .optional()
    .isString()
    .withMessage("کلمه عبور باید از نوع رشته باشد"),
  authMiddleware,
  update
);

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
router.delete("/:id", idValidator, authMiddleware, destroy);

module.exports = router;
