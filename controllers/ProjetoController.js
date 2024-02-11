import criarProjetoService from "../services/criarProjetoService.js";

async function create(req, res){
    const body = req.body
    const {_id: id} = res.locals.user

    try {
        const projeto = await criarProjetoService.create(body, id)
        return res.status(201).send(projeto)
    } catch (error) {
        return res.status(409).send(error.message)        
    }
}

async function findById(req, res) {
    const { id } = req.params
    try {
      const pesq = await criarProjetoService.findById(id)
      return res.status(200).json(pesq);
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
}

async function findAll(req, res){
    try {
        const projeto = await criarProjetoService.findAll()
        return res.send(projeto)
    } catch (error) {
        return res.status(500).send(error.message)        
    }
}

async function findAllByUser(req, res){
    const {_id: id} = res.locals.user

    try {
        const projeto = await criarProjetoService.findAllByUser(id)
        return res.send(projeto)
    } catch (error) {
        return res.status(500).send(error.message)        
    }
}

async function atualizar(req, res){
    try {
      const id = req.params.id;
      const dadosAtualizados = req.body;
  
      const resultado = await criarProjetoService.atualizar(id, dadosAtualizados);
  
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  }

export default { create, findById, findAll, findAllByUser, atualizar};
