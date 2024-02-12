import ClienteSchema from "../schemas/ClienteUser.js";
import jwt from "jsonwebtoken";

async function create(data){
    return ClienteSchema.create(data)
}

async function findAllUser(){
    return await ClienteSchema.find()
}

async function findById(id){
    const user = await ClienteSchema.findById({_id: id})
    return user
}

async function findByEmail(email){
    const user = await ClienteSchema.findOne({email})
    return user
}

async function update(id, updateData){
    return await ClienteSchema.findByIdAndUpdate(id, updateData, { new: true })
}



async function generateToken(id) {
    return jwt.sign({ id }, "84c2109279e6cde7b262d3c2d1941ec950d006aa7712ddbbc6cd2791aa49c46f", { expiresIn: 86400 });
  }

  export default {create,findAllUser,findById, findByEmail, generateToken, update}