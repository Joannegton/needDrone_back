import Comentario from "../schemas/Comentario.js";
import comentarioService from "../services/comentarioService.js";

async function criarComentario(req, res){
    const body = req.body

    try {
        const resService = await comentarioService(body)
        return res.status(201).send(resService)
    } catch (error) {
        return res.status(409).send(error.message) 
    }
}

async function consultarComentario(req, res) {
    try {
      const clientes = await Comentario.find();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao recuperar clientes do banco de dados.' });
    }
  }

export default {criarComentario, consultarComentario}