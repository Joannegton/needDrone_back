import ClienteSchema from "../schemas/ClienteUser.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

async function create(data) {
  return await ClienteSchema.create(data);
}

async function findByEmail(email) {
  const user = await ClienteSchema.findOne({ email });
  return user;
}

async function generateToken(id) {
  return jwt.sign({ id }, "84c2109279e6cde7b262d3c2d1941ec950d006aa7712ddbbc6cd2791aa49c46f", { expiresIn: 86400 });
}

async function findById(id) {
  const user = await ClienteSchema.findById(id);
  return user;
}

export default { create, findByEmail, generateToken, findById };
