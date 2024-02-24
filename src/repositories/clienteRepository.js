import ClienteSchema from "../schemas/ClienteUser.js";
import jwt from "jsonwebtoken";

async function create(data){
    return ClienteSchema.create(data)
}

async function findAllUser(){
    return await ClienteSchema.find()
}

async function findById(id){
    return await ClienteSchema.findById({_id: id})
}

async function findByEmail(email){
    return await ClienteSchema.findOne({email})
}

async function update(id, updateData){
    return await ClienteSchema.findByIdAndUpdate(id, updateData, { new: true })
}

async function deleted(id){
    return await ClienteSchema.findByIdAndDelete(id)
}

async function generateToken(id) {
    return jwt.sign({ id }, "84c2109279e6cde7b262d3c2d1941ec950d006aa7712ddbbc6cd2791aa49c46f", { expiresIn: 86400 });
  }

  export default {create,findAllUser,findById, findByEmail, generateToken, update, deleted}