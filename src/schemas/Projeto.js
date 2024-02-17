import { Schema, model } from "mongoose";

const ProjetoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    droneType: { type: String },
    imgQuality: { type: String, required: true },
    cobertArea: { type: String, required: true },
    imgsubposition: { type: Boolean },
    deadline: { type: Date, required: true },
    localization: { type: String },
    budget: { type: Number },
    userId: { type: Schema.Types.ObjectId, required: true, ref: "clienteUsers" },
    userNameCliente: { type: String },
    userAvaliacao: { type: Number },
    status: { type: String }, // Estado da ordem de projeto
    aceitouOrdemPor: { type: Schema.Types.ObjectId, ref: "pilotoUsers" },
    userNamePiloto: { type: String },
    outrasInformacoes: { type: String }, // Outras informações relevantes
    created_at: { type: Date, default: Date.now() },
});

// Pré-processador para preencher automaticamente campos adicionais
ProjetoSchema.pre('save', async function (next) {
    try {
        const user = await this.model('clienteUsers').findById(this.userId);
        if (!user) {
            throw new Error('User not found');
        }
        this.userNameCliente = user.name;
        this.userAvaliacao = user.avaliacao;
        // Preencher informações adicionais, se necessário
        next();
    } catch (error) {
        next(error);
    }
});

ProjetoSchema.pre('save', async function (next) {
    try {
        const user = await this.model('pilotoUsers').findById(this.aceitouOrdemPor);
        if (!user) {
            throw new Error('User not found');
        }
        this.userNamePiloto = user.name;
        this.userAvaliacao = user.avaliacao;
 
        next();
    } catch (error) {
        next(error);
    }
});

export default model("projeto", ProjetoSchema);
