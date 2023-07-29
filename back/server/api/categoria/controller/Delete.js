const { request, response } = require("express")
const { Categoria } = require("../../../db/models")

const Delete = async  (req = request, res =response) => {
    const {payload} = req
    const {target} = req.body

    if(payload.rol !=2 || false) return res.status(200).json({status: 401, msg: 'Usted no dispone de un privilegio requerido'})

    try{
        const tempCategoria = await Categoria.findByPk(target)
        if(!tempCategoria) return res.status(200).json({status: 400, msg: 'Debe proporcionar una categoría válida'})

        await tempCategoria.destroy()

        res.status(200).json({status: 200, msg: 'Categoría eliminada con éxito'})



    }catch(err){
        res.status(200).json({status: 500 , msg: 'No podemos eliminar categorías en este momento', err})
    }
}


module.exports  = Delete