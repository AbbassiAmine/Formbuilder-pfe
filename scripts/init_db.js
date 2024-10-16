const bcrypt = require("bcryptjs");
const Admin = require("../models/admin.models");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Form_Base");
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});

mongoose.connection.on("error", (err) => {
  console.log("mongoose failed with", err);
});
async function initAdmin() {
  const salt = await bcrypt.genSalt(16);
  const hashedPassword = await bcrypt.hash("123456789", salt);
  const newAdmin = new Admin({
    firstName: "amine",
    lastName: "abbassi",
    email: "amine.abb123@gmail.com",
    password: hashedPassword,
  });

  await newAdmin.save();
}

try {
  const init = async () => {
    await initAdmin();
    console.log("Done!");
  };
  init();
} catch (err) {
  console.log(err);
}
