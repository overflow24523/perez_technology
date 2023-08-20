const { request, response } = require("express");
const { Producto , Categoria, Proveedor} = require("../../../db/models");

const Update  = async (req = request , res= response )  => {

    const { payload } = req
    const { target, nombre , descripcion , codigo , id_categoria, precio, cantidad, id_proveedor} = req.body

    const updates= []

    if(payload.rol != 2 && payload.rol != 3 && true ) return res.status(200).json({status: 401, msg: 'Usted no dispone de un privilegio requerido'})

    try{
        const tempProducto  = await Producto.findByPk(target)
        
        if(!tempProducto) return res.status(200).json({status: 400 , msg: 'Debe proporcioar un producto valido para editar'})

        if(nombre){
            const lastNombre  = tempProducto.nombre
            tempProducto.update({nombre})
            await tempProducto.save()

            updates.push({path: 'nombre', last: lastNombre, now: nombre})
        }

        if(descripcion){
            const lastDescripcion = tempProducto.descripcion
            tempProducto.update({descripcion})
            await tempProducto.save()

            updates.push({path: 'descripcion', last: lastDescripcion, now: descripcion})
        }

        if(codigo){
            const lastCodigo = tempProducto.codigo
            tempProducto.update({codigo})
            await tempProducto.save()

            updates.push({path: 'codigo', last: lastCodigo, now: codigo})
        }

        if(Number(id_categoria)){
            const lastCategoria  = tempProducto.id_categoria
            const categoria = Number(id_categoria)
            const tempCategoria = await Categoria.findByPk(categoria)
            
            if(tempCategoria){
                tempProducto.update({id_categoria: categoria})
                await tempProducto.save()

                updates.push({path: 'id_categoria' , last: lastCategoria, now: categoria})
            }

        }

        if(Number(precio)){
            const lastPrecio = tempProducto.precio
            const newPrecio = Number(precio)
            tempProducto.update({precio: newPrecio})
            await tempProducto.save()


            updates.push({path: 'precio' , last: lastPrecio, now: newPrecio})
        }

        
        if(Number(cantidad)){
            const newCantidad = Number(cantidad)
            const lastCantidad = tempProducto.cantidad
            tempProducto.update({cantidad: newCantidad})
            await tempProducto.save()

            updates.push({path:'cantidad', last: lastCantidad, now: newCantidad})
        }


        if(Number(id_proveedor)){
            const lastProveedor = tempProducto.id_proveedor
            const newProveedor  = Number(id_proveedor)
            const tempProveedor = await  Proveedor.findByPk(newProveedor)

            if(tempProveedor){
                tempProducto.update({id_proveedor: newProveedor})    
                await tempProducto.save()

                updates.push({path: 'id_proveedor' , last: lastProveedor, now: newProveedor})
            }
        }



        

        

        if(updates.length){
            res.status(200).json({status: 200, msg: 'El producto  ha  sido editado', updates})
        }else{
            res.status(200).json({status: 200, msg: 'No se han realizado ediciones', updates})
        }

    }catch(err){
        res.status(200).json({status: 500 , msg: 'No podemos editar productos en este momento' , err})
    }


}


module.exports = Update