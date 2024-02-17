import Joi from 'joi'

export const Comentario = Joi.object({
    pilotoId: Joi.string().required(),
    clienteId: Joi.string().required(),
    avaliacao: Joi.number().required(),
    comentario: Joi.string().required()
})