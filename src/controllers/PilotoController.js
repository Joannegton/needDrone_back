import PilotoRepository from "../repositories/pilotoRepository.js";
import PilotoService from "../services/criarPilotoService.js";

async function criarPiloto(req, res){
    const body = req.body

    try {
        const resService = await PilotoService.criarPiloto(body)
        return res.status(201).send(resService)
    } catch (error) {
        return res.status(409).send(error.message)
    }
}

async function findAllUser(req, res) {
    try {
      const pilotos = await PilotoRepository.findAllUser();
      res.json(pilotos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao recuperar pilotos do banco de dados.' });
    }
}

async function findById(req, res) {
    const { id } = req.params
    try {
      const pilotos = await PilotoService.findById(id);
      res.json(pilotos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao recuperar pilotos do banco de dados.' });
    }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const result = await PilotoService.update(id, updateData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
}

export default {criarPiloto, findAllUser, findById, update}