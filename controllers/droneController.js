import droneRepository from '../repositories/droneRepository.js'
import droneService from '../services/droneService.js'

async function create(req, res){
    const body = req.body
    const {_id: id} = res.locals.piloto
    try {
        const resService = await droneService.create(body, id)
        return res.status(201).send(resService)
    } catch (error) {
        
        return (res.status(409).send(error.message) && console.log("bugou no controler"))
    }
}

async function findByUserId(req, res){
    const id = req.params.userId
    try {
        const resService = await droneRepository.findByUserId(id)
         return res.status(200).json(resService)
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

async function findById(req, res){
    const id = req.params.id
    try {
        const resService = await droneService.findById(id)
         return res.status(200).json(resService)
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

async function findAll(req, res){
    try {
        const resService = await droneRepository.findAll()
        return res.json(resService)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function atualizar(req, res){
    try {
      const id = req.params;
      const dadosAtualizados = req.body;
  
      const resultado = await droneService.atualizar(id, dadosAtualizados);
  
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  }

export default {create, findByUserId, findById, findAll, atualizar}