import droneRepository from "../repositories/droneRepository.js"

async function create(body, id){
    if (!id) throw new Error("User id is required");
  return await droneRepository.create({ ...body, userId: id });
}

async function findByUserId(id){
  if (!id) throw new Error("Usuer not found!")
  return await droneRepository.findByUserId(id)
}

async function findById(id){
  if (!id) throw new Error("Usuer not found!")
  return await droneRepository.findById(id)
}

async function atualizar(id, dadosAtualizados){
  if (!id) throw new Error("Drone id required")
  return await droneRepository.atualizar(id, dadosAtualizados)
}


export default {create, findByUserId, findById, atualizar}