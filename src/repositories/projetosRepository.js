import ProjetoSchema from "../schemas/Projeto.js";

async function create(data){
    return ProjetoSchema.create(data)
}

async function findAllByUser(id){
    return await ProjetoSchema.find({userId: id})
}
async function findAll(){
    return await ProjetoSchema.find()
}

async function findById(id){
    return await ProjetoSchema.findById({_id: id})
}

async function atualizar(id, dadosAtualizados){
    return await ProjetoSchema.findByIdAndUpdate(id, dadosAtualizados, { new: true })
}
export default { create, findAll, findAllByUser, findById, atualizar };