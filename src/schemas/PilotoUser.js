import { Schema, model } from "mongoose";

const PilotoSchema = new Schema({
    name: {type: String, require: true},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    licenca: {type: String, unique:true, required: true},
    dataNasc: {Type: Date},
    tel: {type: String},
    whatsapp: { type: Boolean, default: false},
    rua: {type: String},
    cidade: {type: String},
    estado: {type: String},
    cep: {type: String,},
    experiencia:{type: String},
    especializacao: {type: String},
    foto: {type: String},
    biografia: {type: String},
    avaliacao: {type: Number},
    createdAt: { type: Date, default: Date.now() }
})

export default model("pilotoUsers", PilotoSchema)