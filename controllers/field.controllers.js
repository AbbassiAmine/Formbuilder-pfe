const Field = require("../models/field.models");
const Form = require("../models/form.models");

const addField = async (req, res) => {
  const newField = new Field({
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
    isRequired: false,
    form: req.form._id,
  });

  try {
    await newField.save();
    const form = await Form.aggregate([
      {
        $match: {
          _id: req.form._id,
        },
      },

      {
        $lookup: {
          from: "fields",
          localField: "_id",
          foreignField: "form",
          as: "fields",
        },
      },
    ]);

    return res.status(200).json(form[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getFields = async (req, res) => {
  try {
    const fields = await Field.find();
    return res.status(200).json(fields);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteField = async (req, res) => {
  const field = req.field;
  try {
    const deletedField = await Field.findByIdAndDelete(field._id);
    return res.status(200).json(deletedField);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateField = async (req, res) => {
  const field = req.field;
  try {
    const updatedField = await Field.findByIdAndUpdate(field._id, req.body, {
      new: true,
    });
    console.log(updatedField);
    return res.status(200).json(updatedField);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// const updateField = async (req, res) => {
//   const form = req.form;
//   const field = req.field;
//   try {
//     await Field.findByIdAndUpdate(field._id, req.body, {
//       new: true,
//     });
//     const updatedField = await Form.aggregate([
//       {
//         $match: {
//           _id: form._id,
//         },
//       },

//       {
//         $lookup: {
//           from: "fields",
//           localField: "_id",
//           foreignField: "form",
//           as: "fields",
//         },
//       },
//     ]);
//     return res.status(200).json(updatedField[0]);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// };

const addOptionToField = async (req, res) => {
  const f = req.field;
  const option = req.body.option;

  try {
    f.options.push(option);
    const savedField = await f.save();
    return res.status(200).json(savedField);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const removeOptionFromField = async (req, res) => {
  const f = req.field;

  try {
    const options = f.options.filter(
      (option) => option.toString() !== req.body.option
    );
    f.options = options;
    const savedField = await f.save();
    return res.status(200).json(savedField);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addField = addField;
module.exports.addOptionToField = addOptionToField;
module.exports.removeOptionFromField = removeOptionFromField;
module.exports.updateField = updateField;
module.exports.deleteField = deleteField;
module.exports.getFields = getFields;
