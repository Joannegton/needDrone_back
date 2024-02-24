import ClienteRepository from "../repositories/clienteRepository.js";
import bcrypt from 'bcrypt'

async function criarCliente(body){
    const hasPassword = bcrypt.hashSync(body.password, 10)

    const userExists = await ClienteRepository.findByEmail(body.email)
    if (userExists) throw new Error("Usauário já existe!")

    return await ClienteRepository.create({...body, password:hasPassword})
}


async function findById(id){
    if (!id) throw new Error("User id is required");
  return await ClienteRepository.findById(id);
}

async function update(id, updateData) {
  try {
    if (!id) throw new Error("User id is required");
    const result = await ClienteRepository.update(id, updateData);
    return result;
  } catch (error) {
    throw new Error(`Erro ao atualizar cliente: ${error.message}`);
  }
}


async function deleted(id){
  if (!id) throw new Error("User id is required");
return await ClienteRepository.deleted(id);
}


export default {criarCliente, findById, update, deleted}