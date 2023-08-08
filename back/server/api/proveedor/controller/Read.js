const { request, response } = require("express");
const { Proveedor } = require("../../../db/models");

const Read = async (req = request,res = response ) => {
    const {payload} = req

    if(payload.rol!=2 && payload.rol !=3  && true ) return res.status(200).json({status: 401, msg: 'Usted no dispone de un privilegio requerido'})
    try{
        const tempProveedors = await Proveedor.findAll()
        res.status(200).json({status: 200 , msg: 'Proveedores obtenidos con éxito' , bag: tempProveedors})

    }
    catch(err){
        return res.status(200).json({status: 500 , msg: 'No podemos obtener Proveedores en este momento', err})
    }
    

}

module.exports = Read

