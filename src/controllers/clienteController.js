import clienteRepository from '../repositories/clienteRepository.js'
import ClienteService from '../services/clienteService.js'

async function criarCliente(req, res){
    const body = req.body

    try {
        const resService = await ClienteService.criarCliente(body)
        return res.status(201).send(resService)
    } catch (error) {
        return res.status(409).send(error.message)
    }
}

async function findAllUser(req, res) {
  try {
    const pilotos = await clienteRepository.findAllUser();
    res.json(pilotos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar pilotos do banco de dados.' });
  }
}

async function findById(req, res) {
    const { id } = req.params //params -> parametros da url
    try {
      const pesq = await ClienteService.findById(id)
      return res.status(200).json(pesq);
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
}

async function update(req, res) {
  try {
    const id = req.params;
    const updateData = req.body;

    const result = await ClienteService.update(id, updateData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
}



export default {criarCliente, findAllUser, findById, update}