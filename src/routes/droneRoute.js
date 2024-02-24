import { Router } from "express";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { Drone } from "../schemas/validation/Drone.js";
import droneController from "../controllers/droneController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


const droneRouter = Router()

droneRouter.post('/drone/cadastro', validationSchemaMiddleware(Drone), authMiddleware, droneController.create)

droneRouter.get('/drone', droneController.findAll)

droneRouter.get('/drones/:userId', droneController.findByUserId)

droneRouter.get('/drone/:id', droneController.findById)

droneRouter.put('/drone/atualizar/:_id', droneController.atualizar)

droneRouter.delete('/drone/delete/:_id', droneController.deleted)

export default droneRouter