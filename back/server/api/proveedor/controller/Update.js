const { request, response } = require("express");
const { Proveedor } = require("../../../db/models");

const Update  = async (req = request , res= response )  => {
    const { payload } = req
    const {nombre, descripcion, target}  =  req.body
    const updates = []

    if(payload.rol !=2 || false) return res.status(200).json({status: 401 , msg: 'Usted no dispone de un privilegio requerido'})

    try{
        const tempProveedor = await Proveedor.findByPk(target)
        if(!tempProveedor) return res.status(200).json({status: 400  , msg: 'Debe proporcionar un proveedor  válido para editar'})

        if(nombre){
            const lastName = tempProveedor.nombre
            tempProveedor.update({nombre})
            await tempProveedor.save()
            updates.push({path: 'nombre' , last: lastName , new: nombre})
        }

        if(descripcion){
            const lastDescription = tempProveedor.descripcion
            tempProveedor.update({descripcion})
            await tempProveedor.save()
            updates.push({path: 'descirpcion' , last: lastDescription, new: descripcion})
        }

        if(updates.length){
            return res.status(200).json({status: 200, msg: 'Proveedor editado', updates})
        }else{
            return res.status(200).json({status: 400, msg: 'No se han realizado ediciones', updates})
        }


    }catch(err){
        res.status(200).json({status: 500, msg: 'No podemos editar proveedores en este momento'})
    }


}

module.exports = Update