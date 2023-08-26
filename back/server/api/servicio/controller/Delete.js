const { request, response } = require("express");
const { Servicio } = require("../../../db/models");

const Delete = async (req = request, res  =response)=> {
    const {payload}= req
    const {target} = req.body

    if(payload.rol != 2 && true) return res.status(200).json({status: 401, msg: 'No dispone de un privilegio requerido' })

    try{
        const tempServicio = await Servicio.findByPk(target)
        if(!tempServicio) return res.status(200).json({status: 400, msg: 'Debe proporcionar un servicio válido'})
        await tempServicio.destroy()

        return res.status(200).json({status: 200, msg: 'Servicio eliminado'})

    }catch(err){
        return res.status(200).json({status: 500, msg: 'No podemos eliminar Servicios en este momento', err})
    }
}



module.exports = Delete