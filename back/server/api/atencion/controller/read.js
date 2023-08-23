const { request, response } = require("express")
const { Atencion } = require("../../../db/models")

const Read  = async  (req = request, res = response)=>{
    const {} = req.body
    const {payload} = req
    if(payload.rol != 2 && true ) return res.status(200).json({status: 401, msg: 'No dispone de un privilegio requerido '})

    try{
        const atenciones  = await Atencion.findAll({include: [{all: true}]})

        return res.status(200).json({status: 200, msg: 'Atenciones obtenidas con éxito', bag: atenciones})

    }catch(err){
        return res.status(200).json({status: 500, msg: 'No podemos obtener atenciones en este momento'})
    }
}


module.exports = Read