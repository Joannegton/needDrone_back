import Joi from 'joi'

export const Comentario = Joi.object({
    pilotoId: Joi.string().required(),
    clienteId: Joi.string().required(),
    estrelas: Joi.number().required(),
    comentario: Joi.string().required(),
    dataAvaliacao: Joi.date().required()
})