import {Schema, model} from 'mongoose'

const ComentarioSchema = new Schema({
    pilotoId: { type: Schema.Types.ObjectId, ref: 'pilotoUsers', required: true },
    clienteId: { type: Schema.Types.ObjectId, ref: 'clienteUsers', required: true },
    estrelas: { type: Number, required: true },
    comentario: { type: String, required: true },
    dataAvaliacao: { type: Date, default: Date.now() },
})

ComentarioSchema.index({ pilotoId: 1, clienteId: 1 }, { unique: true }); // índice composto

export default model("comentario", ComentarioSchema)