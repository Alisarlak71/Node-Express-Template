const mongoose = require("mongoose");
const User = require("../models/user.model");
require("../config/db.config");

async function seedAdmin() {
  const existingAdmin = await User.findOne({ username: 'admin' });

  if (!existingAdmin) {
    const adminCredentials = {
      first_name: "Ali",
      last_name: "Sarlak",
      username: "admin",
      password: "123456",
    };

    await User.create(adminCredentials);

    console.log("Admin user created successfully");
  } else {
    console.log("Admin user already exists");
  }

  await mongoose.disconnect();
}
seedAdmin()
  .then(() => {
    console.log("Admin seeding completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error seeding admin:", err);
    process.exit(1);
  });
