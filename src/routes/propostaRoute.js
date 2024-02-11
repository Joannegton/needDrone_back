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


export default propostaRouter