const User = require("../models/user.model");
const index = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const store = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.json({ message: "با موفقیت ثبت شد!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const show = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (user) return res.json(user);
    return res.status(404).json({ error: "کاربر مورد نظر یافت نشد" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const update = async (req, res) => {
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
};

const destroy = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    return res.json({ message: "!با موفقیت حذف شد!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { index, store, show, update, destroy };
