const { request, response } = require("express");
const { Categoria, Proveedor, Producto }  = require('../../../db/models')

const Create = async (req = request , res = response)  => {
    const {payload } = req
    const {body} = req

    if(payload.rol !=2 || false) return res.status(200).json({status: 401, msg: 'Usted no dispone de un privilegio requerido'})
    try{
        const tempCategoria  = await Categoria.findByPk(body.id_categoria)

        if(!tempCategoria) return res.status(200).json({status: 400, msg: 'Debe proporcionar una categoría válida'})

        const tempProveedor  = await Proveedor.findByPk(body.id_proveedor)

        if(!tempProveedor) return res.status(200).json({status: 400, msg: 'Debe proporcionar un proveedor válido'})

        const tempProducto  =  new Producto({...body})
        await tempProducto.save()
        

        res.status(200).json({status: 200, msg: 'Producto creado con éxito'})


    }catch(err){
        return res.status(200).json({status: 500, msg: 'No podemos crear productos en este momento', err})
    }


}

module.exports = Create