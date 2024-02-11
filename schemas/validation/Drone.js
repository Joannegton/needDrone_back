import Joi from 'joi'

export const Drone = Joi.object({
    name: Joi.string().required().min(3),
    droneType: Joi.string().valid('quadricoptero', 'hexacoptero', 'octocoptero', "asaFixa", 'nanoDrone').required(),
    imgQuality: Joi.string().required().valid('SD', 'HD', 'Full HD', 'Quad HD', '4K'),
    cobertArea: Joi.string().required().valid('100', '200', '400', '500+'),
    imgsubposition: Joi.boolean(),
    autonomia: Joi.string().required().valid('60', '90', '120', '121+'),
    status: Joi.string().valid('Ativo', 'Manutencao', 'Inativo').default('ativo'),
    userId: Joi.string()
})