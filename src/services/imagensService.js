import imagensRepository from '../repositories/imagensRepository.js'
async function uploadImage(id, fileUrl){
    try {
      if(!id) throw new Error('User id is required')
      return await imagensRepository(id, fileUrl);
    } catch (error) {
      throw new Error(`Erro ao atualizar cliente: ${error.message}`);
    }
    }

    export default uploadImage