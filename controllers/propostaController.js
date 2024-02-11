import propostaService from "../services/propostaService.js"

async function criarProposta (req, res){
    const body = req.body
    try {
        const resService = await propostaService.criarProposta(body)
        return res.status(201).send(resService)
    } catch (error) {
        return res.status(409).send(error.message) 
    }
}

async function findById(req, res){
    const {id} = req.params
    try {
        const resService = await propostaService.findById(id)
        return res.status(201).send(resService)
    } catch (error) {
        return res.status(409).send(error.message) 
    }
}

async function findByProjectId(req, res){
    const {projectId} = req.params
    try {
        const resService = await propostaService.findByProjectId(projectId)
        return res.status(201).send(resService)
    } catch (error) {
        return res.status(409).send(error.message) 
    }
}

async function findAll(req, res){
    try {
        const resService = await propostaService.findAll()
        return res.status(201).send(resService)
    } catch (error) {
        return res.status(409).send(error.message) 
    }
}

async function update(req, res){
    try {
      const id = req.params.id;
      const dadosAtualizados = req.body;
  
      const resultado = await propostaService.update(id, dadosAtualizados);
  
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  }



export default {criarProposta, findById, findAll, findByProjectId, update}