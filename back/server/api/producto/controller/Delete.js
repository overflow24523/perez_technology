const { request, response } = require("express")
const { Producto } = require("../../../db/models")

const Delete = async (req = request, res =response) => {
    const {payload} = req
    const {target}  = req.body

    if(payload.rol != 2 || false) res.status(200).json({status: 401, msg: 'Usted no dispone de un privilegio requerido'})

    try{
        const tempProducto =  await Producto.findByPk(target)
        if(!tempProducto) return res.status(200).json({status: 400, msg: 'Debe proporcionar un producto válido'})

        await tempProducto.destroy()

        res.status(200).json({status: 200, msg: 'Producto eliminado con éxito'})
    }catch(err){
        res.status(200).json({status: 500, msg: 'No podemos elminar productos en este momento', err })
    }

}


module.exports  = Delete