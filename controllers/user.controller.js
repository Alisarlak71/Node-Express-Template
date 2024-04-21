const User = require("../models/user.model");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const store = async (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    try {
      const user = new User(req.body);
      await user.save();
      return res.json({ message: "با موفقیت ثبت شد!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  return res.status(422).json({ errors: result.array() });
};

const show = async (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    try {
      const user = await User.findById(req.params.id);

      if (user) return res.json(user);
      return res.status(404).json({ error: "کاربر مورد نظر یافت نشد" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  return res.status(422).json({ errors: result.array() });
};

const update = async (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    try {
      const user = await User.findOne({ _id: req.params.id });
      if (user) {
        await user.updateOne(req.body);

        return res.json({ message: "!با موفقیت ثبت شد!" });
      }
      return res.status(404).json({ error: "کاربر مورد نظر یافت نشد" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  return res.status(422).json({ errors: result.array() });
};

const destroy = async (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    try {
      await User.deleteOne({ _id: req.params.id });
      return res.json({ message: "!با موفقیت حذف شد!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  return res.status(422).json({ errors: result.array() });
};

module.exports = { index, store, show, update, destroy };
