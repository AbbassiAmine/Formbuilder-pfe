const mongoose = require("mongoose");
const ResponseSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },

    responses: [
      {
        questionId: String,
        value: String,
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Response", ResponseSchema);

