import imagensRepository from '../repositories/imagensRepository.js'
async function uploadImage(id, userType, fileUrl){
    try {
      if(!id) throw new Error('User id is required')
      return await imagensRepository(id, userType, fileUrl);
    } catch (error) {
      throw new Error(`Erro ao atualizar cliente: ${error.message}`);
    }
    }

    export default uploadImage