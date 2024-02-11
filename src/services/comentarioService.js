import comentarioRepository from "../repositories/comentarioRepository.js";

async function criarComentario(body){
    return await comentarioRepository.create(body)
}

export default criarComentario