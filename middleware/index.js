const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  tags: Joi.array().items(Joi.string())
});

module.exports = {
  registerSchema,
  loginSchema,
  postSchema
};