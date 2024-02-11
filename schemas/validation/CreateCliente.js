import Joi from "joi";

export const CreateCliente = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().email().required().min(3),
  password: Joi.string(),
  createdAt: Joi.string(),
});
