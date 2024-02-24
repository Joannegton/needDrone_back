import bcrypt from 'bcrypt'
import criarPilotoRepository from '../repositories/pilotoRepository.js'
import pilotoRepository from '../repositories/pilotoRepository.js';

async function criarPiloto(body){
    const hasPassword = bcrypt.hashSync(body.password, 10);

    const userExists = await criarPilotoRepository.findByEmail(body.email)
    if (userExists) throw new Error("Usauário já existe!")

    return await criarPilotoRepository.create({...body, password:hasPassword})
}

async function findById(id){
    if (!id) throw new Error("User id is required");
  return await criarPilotoRepository.findById(id);
}

async function update(id, updateData) {
  try {
    if (!id) throw new Error("User id is required");
    const result = await criarPilotoRepository.update(id, updateData);
    return result;
  } catch (error) {
    throw new Error(`Erro ao atualizar cliente: ${error.message}`);
  }
}

async function deleted(id){
  if (!id) throw new Error("User id is required");
return await pilotoRepository.deleted(id);
}

export default {criarPiloto, findById, update, deleted}