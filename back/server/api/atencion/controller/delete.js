const { request, response } = require('express')
const { Atencion } = require('../../../db/models')
const Delete = async (req  = request , res = response)=>{
    const {target} =req.body
    const {payload} = req

    if(payload.rol !=2 && payload.rol!=3  && true) return res.status(200).json({status: 401, msg: 'No dispone de un privilegio requerido'})

    try{
        const tempAtencion = await Atencion.findByPk(target)
        if(!tempAtencion) return res.status(200).json({status: 400 , msg: 'Debe proporcionar una atención válida'})

        await tempAtencion.destroy()
        return res.status(200).json({status: 200, msg: "Atención eliminada"})


    }catch(err){
        return res.status(200).json({status: 500 , msg: 'No podemos eliminar atenciones en este momento', err})
    }

}


module.exports = Delete