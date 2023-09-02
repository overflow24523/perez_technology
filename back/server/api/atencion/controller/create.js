const { request, response } = require("express");
const {Usuario ,Servicio, Atencion, Producto } = require("../../../db/models");

const checkProductList = (arg)=>{
    return new Promise(async (resolve = (state) => state , reject = (err) => err )=>{
        for(let i=0;i<arg.length ;i++){
            const item  = Number(arg[i])
            const tempUser = await Producto.findByPk(item)
            if(!tempUser) resolve(false)
        }
        resolve(true)
    })
}


const Create = async  (req = request , res = response)=>{
    const {id_service, product_list:ListProduct , importe , detalles} = req.body
    const {payload} = req
    const {uid:id_own} = payload

    if(payload.rol != 2 && payload.rol!= 3 && true ) return res.status(200).json({status: 401, msg: 'Usted no dispone de un privilegio requerido'})


    try{
        product_list = ListProduct.split(',')


        const tempUser = await Usuario.findByPk(id_own)
        if(!tempUser) return res.status(200).json({status: 400, msg: 'Debe proporcionar un usuario válido '})

        const tempService = await Servicio.findByPk(id_service)
        if(!tempService) return res.status(200).json({status: 400, msg: 'Debe proporcionar un servicio válido'})

        let product_list_state = false 

        await checkProductList(product_list)
        .then(arg => { product_list_state = arg  })
        .catch(err=>{
            product_list_state = false 
        })

        if(!product_list_state) return res.status(200).json({status: 400, msg: 'No coincide la lista de productos'})

        const tempAtencion  = new Atencion({
            id_own,
            id_service,
            product_list:JSON.stringify(product_list), 
            importe,
            detalles
        })

        await tempAtencion.save()

        return res.status(200).json({status: 200, msg: 'Atención creada con éxito'})


    }catch(err){
        return res.status(200).json({status: 500, msg: 'No podemos registrar atenciones en este momento', err})
    }

}


module.exports = Create