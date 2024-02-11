import Drone from "../schemas/Drone.js";

async function create(data){
    return Drone.create(data)
}

async function findByUserId(id){
    return await Drone.find({userId: id})
}

async function findById(id){
    return await Drone.findById({_id: id})
}
async function findAll(){
    return await Drone.find()
}

async function atualizar(id, dadosAtualizados){
    return await Drone.findByIdAndUpdate(id, dadosAtualizados, { new: true })
}



export default {create, findByUserId, findById, findAll, atualizar}