import {Schema, model} from 'mongoose'

const DroneSchema = new Schema({
    name: {type: String, require: true},
    droneType: {type: String, enum: ['quadricoptero', 'hexacoptero', 'octocoptero', "asaFixa", 'nanoDrone']}, 
    imgQuality: {type: String, enum:['SD', 'HD', 'Full HD', 'Quad HD', '4K'], require: true},
    cobertArea: {type: String, enum:['100', '200', '400', '500+'], require: true},
    imgsubposition: {type: Boolean, require: true, default: false},
    autonomia: {type: String, enum:['60', '90', '120', '121+'], require: true},
    status: {type: String, enum: ['Ativo', 'Manutencao', 'Inativo'], default: 'Ativo'},
    userId:{type: Schema.Types.ObjectId, ref: 'pilotoUsers', require:true},
    created_at: { type: Date, default: Date.now() }
})

export default model('drone', DroneSchema)