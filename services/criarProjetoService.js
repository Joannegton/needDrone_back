import projetosRepository from "../repositories/projetosRepository.js";

async function create(body, id){
    if (!id) throw new Error("Project id is required")
    return await projetosRepository.create({...body, userId: id})
}

async function findById(id){
    if (!id) throw new Error("Project id is required");
  return await projetosRepository.findById(id);
}

async function findAll(){
    return await projetosRepository.findAll()
}
async function findAllByUser(id){
    if (!id) throw new Error("Project id is required")
    return await projetosRepository.findAllByUser(id)
}

async function atualizar(id, dadosAtualizados){
    if (!id) throw new Error("Projeto id required")
    return await projetosRepository.atualizar(id, dadosAtualizados)
}

export default { create, findById, findAll, findAllByUser, atualizar };