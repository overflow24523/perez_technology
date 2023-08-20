const { request, response } = require("express");
const { Servicio } = require("../../../db/models");

const Update = async (req = request, res = response)=>{
    const {payload } = req
    const {target , nombre} = req.body
    let updates = []

    if(payload.rol != 2 && true) return res.status(200).json({status: 401, msg: 'No dispone de un privilegio requerido'})

    try{
        const tempService = await Servicio.findByPk(target)
        if(!tempService) return res.status(200).json({status: 400, msg: 'Debe proporcionar un servicio válido'})

        if(nombre){
            const lastNombre = tempService.nombre
            tempService.update({nombre})
            await tempService.save()

            updates.push({path: 'nombre', last: lastNombre , now: nombre})

        }

        if(updates.length){
            res.status(200).json({status: 200, msg: 'El servicio  ha  sido editado', updates})
        }else{
            res.status(200).json({status: 200, msg: 'No se han realizado ediciones', updates})
        }


    }catch(err){
        return res.status(200).json({status: 500, msg: 'No podemos editar servicios en este momento'})
    }
}

module.exports = Update