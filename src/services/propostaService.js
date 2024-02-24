import propostaRepository from "../repositories/propostaRepository.js"

async function criarProposta(body){
    return await propostaRepository.create(body)
}

async function findById(id){
    if(!id) throw new Error("Proposta id is required")
    return await propostaRepository.findById(id)
}

async function findByProjectId(id){
    if(!id) throw new Error("Proposta id is required")
    return await propostaRepository.findByProjectId(id)
}

async function findAll(){
    return await propostaRepository.findAll()
}

async function update(id, dadosAtualizados){
    if(!id) throw new Error("Proposta id is required")
    return await propostaRepository.update(id, dadosAtualizados)
}

async function deleted(id){
    if (!id) throw new Error("User id is required");
  return await propostaRepository.deleted(id);
  }

export default {criarProposta, findById, findAll, findByProjectId, update, deleted}