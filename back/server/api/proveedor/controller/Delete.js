const { request, response } = require("express")

const { Proveedor } = require("../../../db/models")

const Delete = async (req = request, res =response) => {
    const {payload} = req
    const {target}= req.body

    if(payload.rol !=2 || false) return res.status(200).json({status: 401, msg: 'Usted no dispone de un privilegio requerido'})

    try{
        const tempProveedor = await Proveedor.findByPk(target)
        if(!tempProveedor) return res.status(200).json({status: 400, msg: 'Debe proporcionar un proveedor válido' })

        await tempProveedor.destroy()

        res.status(200).json({status: 200, msg: 'Proveedor eliminado con éxito'})

    }catch(err){
        res.status(200).json({status: 500, msg: 'No podemos eliminar Proveedores en este momento'})
    }

}


module.exports  = Delete