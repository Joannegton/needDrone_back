import comentarioRepository from "../repositories/comentarioRepository.js";

async function criarComentario(body){
    return await comentarioRepository.create(body)
}

async function deleteComentario(id){
    return await comentarioRepository.delete(id)
}
export default {criarComentario, deleteComentario}