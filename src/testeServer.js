/*// server.js
import express, {json} from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

// Configuração do Nodemailer
let transporter = createTransport({
    host: ' smtp.gmail.com', // Substitua pelo host do seu servidor SMTP
    port: 587, // Substitua pela porta do seu servidor SMTP (587 para TLS ou 465 para SSL)
    secure: false, // true para 465, false para outras portas
    auth: {
      user: 'wtg131998@gmail.com.com', // Seu endereço de e-mail
      pass: '131998welli' // Sua senha
    },
    tls: {
      // Descomente se o servidor não tiver um certificado SSL/TLS válido
       rejectUnauthorized: false
    }
  });

// Rota de recuperação de senha
app.post('/esquecisenha', (req, res) => {
  const { email } = req.body;
  // Aqui você deve verificar se o email existe no banco de dados

  // Enviar email para recuperação de senha
  const mailOptions = {
    from: 'wtg131998@gmail.com',
    to: email,
    subject: 'Recuperação de Senha',
    text: 'Clique no link para redefinir sua senha: [localhost:5000/linkredefinirsenha]'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send({ error: 'Erro ao enviar email' });
    } else {
      console.log('Email enviado: ' + info.response);
      res.send({ message: 'Email de recuperação de senha enviado com sucesso!' });
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
*/

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.TOKEN_FIREBASE,
  authDomain: "reactchat-9a511.firebaseapp.com",
  projectId: "reactchat-9a511",
  storageBucket: "reactchat-9a511.appspot.com",
  messagingSenderId: "842229152658",
  appId: "1:842229152658:web:9eb0416f72f38b867e1f4b",
  measurementId: "G-XREJL3ZVTJ",
};

export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);