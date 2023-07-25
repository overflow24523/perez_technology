const { request, response } = require("express");
const { Categoria } = require("../../../db/models");

const Update = async (req = request , res= response )  => {

    const {payload}  = req
    const {label, target}         = req.body
    const updates    =  []

    if(payload.rol != 2 || false ) return res.status(200).json({status: 401 ,  msg: 'Usted no dipone de un privilegio requerido'})

    try{
        const tempCategoria =  await Categoria.findByPk(target)
        if(!tempCategoria) return res.status(200).json({status: 400 , msg: 'Debe proporcionar una categoría válida' })
        

        if(label){
            const lastLabel = tempCategoria.label
            tempCategoria.update({label})
            tempCategoria.save()
            updates.push({path: 'label', last: lastLabel , now: label})
        }



        if(updates.length){
            res.status(200).json({status: 200, msg: 'Categoría Actualizada', updates})
        }else{
            res.status(200).json({status: 200, msg: 'No se han realizado ediciones', updates})
        }
    }catch(err){
        res.status(200).json({status: 500, msg: 'No podemos hacer ediciones en este momento', err})
    }

}

module.exports = Update