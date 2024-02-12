import ClienteSchema from '../schemas/ClienteUser.js'
async function uploadImage(id, fileUrl){
    return await ClienteSchema.findByIdAndUpdate(id, { foto: fileUrl });
}

export default uploadImage