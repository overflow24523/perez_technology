const { request, response } = require("express")
const { Servicio } = require("../../../db/models")

const Read = async (req = request , res = response)=>{
    const {payload} = req

    if(payload.rol != 2  && true  ) return res.status(200).json({status: 401, msg: 'No dispone de un privilegio requerido'})

    try{
        const tempServicios = await Servicio.findAll()    
        
        return res.status(200).json({status: 200, msg: 'Servicios obtenidos',bag: tempServicios})

    }catch(err){
        return res.status(20).json({status: 500, msg: 'No podemos obtener servicios en este momento'})
    }
}


module.exports = Read