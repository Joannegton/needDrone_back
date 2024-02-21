import comentarioRepository from "../repositories/comentarioRepository.js";

async function criarComentario(body){
    return await comentarioRepository.create(body)
}

async function deleteComentario(id){
    if (!id) throw new Error('Id não encontrado.')
    return await comentarioRepository.deleteComentario(id)
}
export default {criarComentario, deleteComentario}