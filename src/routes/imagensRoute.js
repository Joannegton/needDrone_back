import { Router } from "express";
import upload from '../middlewares/multerConfig.js';
import imagensControler from "../controllers/imagensControler.js";


const ImagemRouter = Router()

ImagemRouter.get('/uploads/:filename', imagensControler.serveFile )

ImagemRouter.post('/cliente/upload/:_id', upload.single('file'), imagensControler.uploadImage)

export default ImagemRouter