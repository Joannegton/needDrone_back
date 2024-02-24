import ProjetoService from "../services/criarProjetoService.js";

async function create(req, res){
    const body = req.body
    const {_id: id} = res.locals.user

    try {
        const projeto = await ProjetoService.create(body, id)
        return res.status(201).send(projeto)
    } catch (error) {
        return res.status(409).send(error.message)        
    }
}

async function findById(req, res) {
    const { id } = req.params
    try {
      const pesq = await ProjetoService.findById(id)
      return res.status(200).json(pesq);
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
}

async function findAll(req, res){
    try {
        const projeto = await ProjetoService.findAll()
        return res.send(projeto)
    } catch (error) {
        return res.status(500).send(error.message)        
    }
}

async function findAllByUser(req, res){
    const {_id: id} = res.locals.user

    try {
        const projeto = await ProjetoService.findAllByUser(id)
        return res.send(projeto)
    } catch (error) {
        return res.status(500).send(error.message)        
    }
}

async function atualizar(req, res){
    try {
      const id = req.params.id;
      const dadosAtualizados = req.body;
  
      const resultado = await ProjetoService.atualizar(id, dadosAtualizados);
  
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  }

  async function deleted(req, res) {
    const { id } = req.params //params -> parametros da url
    try {
      const pesq = await ProjetoService.deleted(id)
      return res.status(200).json(pesq);
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }

export default { create, findById, findAll, findAllByUser, atualizar, deleted};
