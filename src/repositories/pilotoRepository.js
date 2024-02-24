import PilotoUser from "../schemas/PilotoUser.js";
import jwt from "jsonwebtoken";

async function create(data){
    return PilotoUser.create(data)
}

async function findAllUser(){
    return await PilotoUser.find()
}

async function findById(id){
    const user = await PilotoUser.findById({_id: id})
    return user
}

async function findByEmail(email){
    const user = await PilotoUser.findOne({email})
    return user
}

async function update(id, updateData){
    return await PilotoUser.findByIdAndUpdate(id, updateData, { new: true })
}

async function generateToken(id) {
    return jwt.sign({ id }, "84c2109279e6cde7b262d3c2d1941ec950d006aa7712ddbbc6cd2791aa49c46f", { expiresIn: 86400 });
}


async function deleted(id){
    return await ClienteSchema.findByIdAndDelete(id)
}
export default {create, findAllUser, findById, findByEmail, update, generateToken, deleted}
