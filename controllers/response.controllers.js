const Response = require("../models/response.models");

const createResponse = async (req, res) => {
  const newResponse = new Response({
    formId: req.body.formId,
    userId: req.body.userId,
    responses: req.body.responses,
  });

  try {
    const savedResponse = await newResponse.save();
    return res.status(201).json(savedResponse);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getResponses = async (req, res) => {
  try {
    const responses = await Response.find();
    return res.status(200).json(responses);
  } catch (err) {
    return res.status(500).json(err);
  }
};
module.exports.createResponse = createResponse;
module.exports.getResponses = getResponses;
