import imagensService from '../services/imagensService.js';
import path from 'path';
import fs from 'fs';

// Função de upload de imagem
async function uploadImage(req, res) {
  try {
    const userType = req.body.userType
    const {_id} = req.params;
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    await imagensService(_id, userType, fileUrl);
    console.log(userType)
    res.send({ fileUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Internal server error.');
  }
}

// Função para servir arquivos estáticos
function serveFile(req, res) {
  try {
    const currentDir = path.resolve();

// Usar o caminho absoluto para acessar a pasta "uploads"
    const uploadsFolderPath = path.join(currentDir, 'uploads');

    const filename = req.params.filename;
    const filePath = path.join(uploadsFolderPath, filename); // Caminho absoluto para o arquivo

    // Verifica se o arquivo existe
    if (fs.existsSync(filePath)) {
      // Envia o arquivo como resposta
      res.sendFile(filePath);
    } else {
      // Se o arquivo não existir, envia uma mensagem indicando isso
      res.status(404).send('Arquivo não encontrado');
      //res.send(filePath)
    }
  } catch (error) {
    console.error('Error serving file:', error);
    res.status(500).send('Internal server error.');
  }
}

// Exportação dos controladores
export default { uploadImage, serveFile };
