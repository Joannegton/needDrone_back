import Joi from 'joi'

export const CreateProjeto = Joi.object({
    title:Joi.string().required().min(3),
    description: Joi.string().required().min(3),
    droneType: Joi.string(),
    imgQuality: Joi.string().required(),
    cobertArea: Joi.string().required(),
    imgsubposition: Joi.boolean(),
    deadline: Joi.date().required(),
    userId: Joi.object(),
    createdAt: Joi.string()
})