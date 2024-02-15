import { Schema, model } from 'mongoose';

const PropostaSchema = new Schema({
  projectId: { type: Schema.Types.ObjectId, ref: 'projeto', required: true },
  tituloProjeto: { type: String},
  IdCriadorProjeto: { type: String },
  NomeCriadorProjeto: { type: String },
  enviadorProposta: { type: Schema.Types.ObjectId, ref: 'Piloto' },
  ofertaInicial: { type: String, required: true },
  ofertaFinal: { type: String, required: true },
  detalhesProposta: { type: String, required: true },
  status: {type: String},
  droneId: {type: Schema.Types.ObjectId, ref: 'drone'}
});

// Pré-processador para preencher automaticamente campos adicionais
PropostaSchema.pre('save', async function (next) {
    try {
        const projeto = await this.model('projeto').findById(this.projectId);
        if (!projeto) {
            throw new Error('User not found');
        }
        this.tituloProjeto = projeto.title;
        this.nomeCriadorProjeto = projeto.userName;
        this.IdCriadorProjeto = projeto.userId;
        this.status = projeto.status;
        // Preencher informações adicionais, se necessário
        next();
    } catch (error) {
        next(error);
    }
});

export default model('proposta', PropostaSchema);


