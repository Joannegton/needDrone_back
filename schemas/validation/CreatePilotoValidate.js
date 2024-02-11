import Joi from "joi";

export const CreatePiloto = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().email().required().min(3),
  password: Joi.string().required().min(3),
  licenca: Joi.string().required(),
  createdAt: Joi.string(),
});