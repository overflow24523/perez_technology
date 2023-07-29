const { request, response } = require("express");
const { Categoria } = require("../../../db/models");

const Read = async (req = request,res = response ) => {
    const {payload } = req

    if(payload.rol !=2 || false) return res.status(200).json({status: 401, msg: 'No dispone de un privilegio requerido'})

    try{
        const tempCategorias  = await Categoria.findAll()
        return res.status(200).json({status: 200, msg: 'Categorías obtenidas con éxito', bag:tempCategorias})

    }catch(err){
        res.status(200).json({status: 500, msg: 'No podemos obtener categorías en este momento', err})
    }
}

module.exports = Read

