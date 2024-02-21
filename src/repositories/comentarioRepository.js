import Comentario from "../schemas/Comentario.js";

async function create(data){
    return Comentario.create(data)
}

async function findAllByUser(id){
    return await Comentario.find({userId: id})
}

async function findByPiloto(pilotoId){
    const user = await Comentario.findOne({pilotoId})
    return user
}

async function findByCliente(clienteId){
    const user = await Comentario.findOne({clienteId})
    return user
}

async function deleteComentario(id){
    return await Comentario.findByIdAndDelete({_id: id})
}

export default {create, findAllByUser, findByPiloto, findByCliente, deleteComentario}