const User = require("../models/user");
const index = async (req, res) => {
  try {
    const user = await User.finAll();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "خطای سرور" });
  }
};

const store = async (req, res) => {};

module.exports = { index, store };
