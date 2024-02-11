import { Schema, model } from "mongoose";

const ClienteSchema = new Schema({
    name: {type: String, require: true},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    dataNasc: {Type: Date},
    tel: {type: String},
    whatsapp: { type: Boolean, default: false },
    rua: {type: String},
    cidade: {type: String},
    estado: {type: String},
    cep: {type: String},
    foto: {type: String},
    biografia: {type: String},
    avaliacao: {type: Number},
    authSource: {enum: ['self', 'google']},
    createdAt: { type: Date, default: Date.now() },
})


export default model("clienteUsers", ClienteSchema);
