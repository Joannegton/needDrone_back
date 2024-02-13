import ClienteSchema from '../schemas/ClienteUser.js'
import PilotoSchema from '../schemas/PilotoUser.js'

async function uploadImage(id, userType, fileUrl){
    if(userType === 'cliente'){
        return await ClienteSchema.findByIdAndUpdate(id, { foto: fileUrl });}
    else if(userType === 'piloto'){
        return await PilotoSchema.findByIdAndUpdate(id, { foto: fileUrl });
    }else{
        throw new Error('Tipo de usuario invalido!')
    }
}


export default uploadImage