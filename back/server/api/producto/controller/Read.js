const { request, response } = require("express");
const { Producto } = require("../../../db/models");

const Read = async  (req = request,res = response ) => {
    const {payload} = req

    if(payload.rol != 2 || false) return res.status(200).json({status: 401, msg: 'Usted no dispone de un privilegio requerido'})

    try{
        const tempProductos = await Producto.findAll({include: [{all:true}]})
        res.status(200).json({status: 200, msg:'Productos  obtenidos con éxito', bag: tempProductos})

    }catch(err){
        res.status(200).json({status: 500, msg: 'No podemos leer productos en este momento', err})
    }
}

module.exports = Read

