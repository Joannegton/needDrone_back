import imagensService from '../services/imagensService.js'
async function uploadImage(req, res){
    try {
      const id = req.params;
      const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
      await imagensService(id, fileUrl);
      res.send({ fileUrl });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).send('Internal server error.');
    }
  }

  export default uploadImage