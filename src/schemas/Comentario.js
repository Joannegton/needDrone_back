import {Schema, model} from 'mongoose'

const ComentarioSchema = new Schema({
    nameCliente: {type: String},
    pilotoId: { type: Schema.Types.ObjectId, ref: 'pilotoUsers', required: true },
    clienteId: { type: Schema.Types.ObjectId, ref: 'clienteUsers', required: true },
    avaliacao: { type: Number, required: true },
    comentario: { type: String, required: true },
    fotoCliente: {type: String},
    dataAvaliacao: { type: Date, default: Date.now() },
})

ComentarioSchema.index({ pilotoId: 1, clienteId: 1 }, { unique: true }); // índice composto

ComentarioSchema.pre('save', async function(next){
    try {
        const user = await this.model('clienteUsers').findById(this.clienteId);
        if(!user){
            throw new Error('User not found');
        }
        this.fotoCliente = user.foto
        this.nameCliente = user.name
        next()
    } catch (error) {
        next(error)
    }
})
export default model("comentario", ComentarioSchema)