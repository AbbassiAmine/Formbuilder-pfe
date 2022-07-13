const mongoose = require("mongoose");
const FormSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    builder: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Form", FormSchema);
