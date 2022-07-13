const mongoose = require("mongoose");
const FieldSchema = new mongoose.Schema(
  {
    options: [
      {
        type: String,
      },
    ],
    title: { type: String },
    type: {
      type: String,
      required: true,
    },

    description: { type: String },
    isRequired: { type: Boolean, default: false },
    form: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
    builder: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Field", FieldSchema);
