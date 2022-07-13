const Form = require("../models/form.models");

const createForm = async (req, res) => {
  const newForm = new Form({
    title: "untitled form",
    builder: req.verifiedUser._id,
  });

  try {
    const savedForm = await newForm.save();
    return res.status(201).json(savedForm);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getMyForms = async (req, res) => {
  try {
    const forms = await Form.find();
    return res.status(200).json(forms);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getFormWithFields = async (req, res) => {
  try {
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

const deleteForm = async (req, res) => {
  const form = req.form;
  try {
    const deletedForm = await Form.findByIdAndDelete(form._id);
    return res.status(200).json(deletedForm);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateForm = async (req, res) => {
  const form = req.form;
  try {
    await Form.findByIdAndUpdate(form._id, req.body, {
      new: true,
    });
    const updatedForm = await Form.aggregate([
      {
        $match: {
          _id: form._id,
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
    return res.status(200).json(updatedForm[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.createForm = createForm;
module.exports.getMyForms = getMyForms;
module.exports.updateForm = updateForm;
module.exports.deleteForm = deleteForm;
module.exports.getFormWithFields = getFormWithFields;
