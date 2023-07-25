const { request, response } = require("express");
const { Proveedor } = require("../../../db/models");

const Create =  async (req = request , res = response)  => {
    const {payload} = req
    const {nombre, descripcion} = req.body

    if(payload.rol!= 2 || false) return res.status(200).json({status: 401, msg: "Usted no dispone de un privilegio requerido" })


    try{
        const tempProveedor = new Proveedor({nombre, descripcion})
        await tempProveedor.save()
        return res.status(200).json({status: 200, msg: 'Proveedor Creado'})
    }catch(err){
        res.status(200).json({status: 500, msg: 'No podemos crear proveedores en este momento', err})
    }

}

module.exports = Create