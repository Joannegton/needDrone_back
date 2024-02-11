import Proposta from "../schemas/Proposta.js";

async function create(data){
    return Proposta.create(data)
}

async function findById(id){
    return await Proposta.findById({_id: id})
}

async function findByProjectId(id){
    return await Proposta.find({projectId: id})
}

async function findAll(){
    return await Proposta.find()
}

async function update(id, dadosAtualizados){
    return await Proposta.findByIdAndUpdate(id, dadosAtualizados, {new: true})
}

export default {create, findAll, findById, findByProjectId, update}