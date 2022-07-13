const {
  createResponse,
  getResponses,
} = require("../controllers/response.controllers");

const verifyToken = require("../middlewares/verifyToken");
const Response = require("../models/response.models");
const Form = require("../models/form.models");
const router = require("express").Router();

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

router.param("response", async (req, res, next, responseId) => {
  try {
    const response = await Response.findById(responseId);
    if (!response) {
      return res.status(404).json("not found");
    }
    req.response = response;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/forms/:formId/users/:userId", verifyToken, getResponses);
router.post("/", verifyToken, createResponse);

module.exports = router;
