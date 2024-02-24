import { Router } from "express";
import propostaController from "../controllers/propostaController.js";


const propostaRouter = Router()

propostaRouter.post(
    "/proposta",
    propostaController.criarProposta)

propostaRouter.put(
    "/proposta/atualizar/:id",
    propostaController.update)

propostaRouter.get(
    "/proposta",
    propostaController.findAll)

propostaRouter.get(
    "/proposta/:id",
    propostaController.findById)

propostaRouter.get(
    "/proposta/projeto/:projectId",
    propostaController.findByProjectId)

propostaRouter.delete(
    "/proposta/delete/:projectId",
    propostaController.deleted)


export default propostaRouter