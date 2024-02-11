import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";
import clienteRepository from "../repositories/clienteRepository.js";
import pilotoRepository from "../repositories/pilotoRepository.js";


async function signup(body) {
  const hasPassword = bcrypt.hashSync(body.password, 10);

  const userExists = await authRepository.findByEmail(body.email);
  if (userExists) throw new Error("User already exists!");

  return await authRepository.create({ ...body, password: hasPassword });
}

async function entrar(body) {
  const type = body.type

  if(type === 'cliente'){
    const userExists = await clienteRepository.findByEmail(body.email);
    if (!userExists) throw new Error("Email or password incorrect!");

    const passwordOk = bcrypt.compareSync(body.password, userExists.password);
    if (!passwordOk) throw new Error("Email or password incorrect!");

    return clienteRepository.generateToken(userExists._id);

  } else if(type === 'piloto'){
    const userExists = await pilotoRepository.findByEmail(body.email);
    if (!userExists) throw new Error("Email or password incorrect!");

   const passwordOk = bcrypt.compareSync(body.password, userExists.password);
   if (!passwordOk) throw new Error("Email or password incorrect!");

   return pilotoRepository.generateToken(userExists._id);
  } else{
    throw new Error('Erro interno no servidor')
  }

}


export default {
  signup,
  entrar,
};
