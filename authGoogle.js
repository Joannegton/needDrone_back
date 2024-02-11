import { OAuth2Client } from "google-auth-library";
import authRepository from "./repositories/authRepository.js";
import jwt from "jsonwebtoken";

const client = new OAuth2Client()

const conectar = async (req, res) =>{
    const {credential, client_id} = req.body

    try {
        const ticket = client.verifyIdToken({
            idToken: credential,
            público: client_id,
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            res.status(200).json({ payload });
            let user = authRepository.findByEmail()
            if(!user){
                user = authRepository.create()
                const token = jwt.sign({ user }, "84c2109279e6cde7b262d3c2d1941ec950d006aa7712ddbbc6cd2791aa49c46f");
                res.status(200).cookie('token', token, { http: true }).json({ payload });
            }
    } catch (error) {
        res.status(400).json({ error })
    }



}

export default conectar