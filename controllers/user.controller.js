const ExceptionHandler = require("../exceptions/handler.exception");
const User = require("../models/user.model");
const { validationResult } = require("express-validator");

const index = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const store = async (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    try {
      const user = new User(req.body);
      await user.save();
      return res.json({ message: "با موفقیت ثبت شد!" });
    } catch (error) {
      next(error);
    }
  }

  next(new ExceptionHandler("خطای اعتبارسنجی", 422, result.array()));
};

const show = async (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    try {
      const user = await User.findById(req.params.id);

      if (user) return res.json(user);

      throw new ExceptionHandler("کاربر مورد نظر یافت نشد", 404);
    } catch (error) {
      next(error);
    }
  }

  next(new ExceptionHandler("خطای اعتبارسنجی", 422, result.array()));
};

const update = async (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    try {
      const user = await User.findOne({ _id: req.params.id });
      if (user) {
        await user.updateOne(req.body);

        return res.json({ message: "!با موفقیت بروزرسانی شد!" });
      }
      throw new ExceptionHandler("کاربر مورد نظر یافت نشد", 404);
    } catch (error) {
      next(error);
    }
  }

  next(new ExceptionHandler("خطای اعتبارسنجی", 422, result.array()));
};

const destroy = async (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    try {
      await User.deleteOne({ _id: req.params.id });
      return res.json({ message: "!با موفقیت حذف شد!" });
    } catch (error) {
      next(error);
    }
  }

  next(new ExceptionHandler("خطای اعتبارسنجی", 422, result.array()));
};

module.exports = { index, store, show, update, destroy };
