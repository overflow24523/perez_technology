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
        let say  = {status: 500 , msg: 'No podemos eliminar categorías en este momento', err}

        if(err['name']=='SequelizeForeignKeyConstraintError'){
            say.status = 400 , 
            say.msg    = 'Esta categoría está en uso' 
        }

        res.status(200).json({...say})
    }
}


module.exports  = Delete