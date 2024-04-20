var router = require("express").Router();
const {
  index,
  store,
  // update,
  // show,
  // destroy,
} = require("../../controllers/user.controller");

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
router.get("/", index);

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
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: پاسخ موفق       
 */
router.post("/", store);

// router.get("/:id", show);
// router.put("/:id", update);
// router.delete("/:id", destroy);

module.exports = router;
