import { Router } from "express";
import upload from '../middlewares/multerConfig.js';
import uploadImage from "../controllers/imagensControler.js";


const ImagemRouter = Router()

ImagemRouter.post('/cliente/upload/:_id', upload.single('file'), uploadImage)

export default ImagemRouter