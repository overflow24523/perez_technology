const { request, response } = require("express");
const { Categoria } = require("../../../db/models");

const Create = async (req = request , res = response)  => {
    const {payload } = req
    const {label } = req.body

    if(payload.rol != 2 || false) return res.status(200).json({status: 401 , msg: 'Usted no dispone de un privilegio requerido'})

    try{
        const tempCategoria  = new Categoria({label})
        await tempCategoria.save()
        res.status(200).json({status: 200, msg: 'Categoría creada con éxito'})
    }catch(err){
        res.status(200).json({status: 500, msg: 'No podemos crear categorías en este momento', err})
    }


}

module.exports = Create