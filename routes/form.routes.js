const {
  createForm,
  getFormWithFields,
  deleteForm,
  updateForm,
  getMyForms,
} = require("../controllers/form.controllers");

const {
  addField,
  getFields,
  deleteField,
  updateField,
  removeOptionFromField,
  addOptionToField,
} = require("../controllers/field.controllers");

const Form = require("../models/form.models");
const Field = require("../models/field.models");
const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const { isFormOwner } = require("../middlewares/isFormOwner");

router.param("form", async (req, res, next, formId) => {
  try {
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json("not found");
    }
    req.form = form;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.param("field", async (req, res, next, fieldId) => {
  try {
    const field = await Field.findById(fieldId);
    if (!field) {
      return res.status(404).json("not found");
    }
    req.field = field;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
});

//form routes
router.get("/", verifyToken, getMyForms);
router.post("/", verifyToken, createForm);
router.get("/:form", verifyToken, getFormWithFields);
router.put("/:form", verifyToken, isFormOwner, updateForm);
router.delete("/:form", verifyToken, isFormOwner, deleteForm);


//field routes
router.put("/:form/fields/:field/options", verifyToken, addOptionToField);
router.put(
  "/:form/fields/:field/options/:option",
  verifyToken,
  removeOptionFromField
);

router.post("/:form/fields", verifyToken, addField);
router.get("/:form/fields", getFields);
router.put("/:form/fields/:field", verifyToken, updateField);
router.delete("/:form/fields/:field", verifyToken, deleteField);

module.exports = router;
