const { request, response } = require("express")
const bcryptjs =  require('bcryptjs')
const { Usuario, Contacto, Rol } = require("../db/models")
const { generarJWT } = require("../helpers/generarJWT")


const contactar   = async (req = request , res = response)=>{
    const {body} = req
    try{
        const newMensaje  = new Contacto(body)

        await newMensaje.save()
        res.status(200).json({status: 200, msg: "Mensaje enviado"})
    }catch(err){
        res.status(200).json({status: 500, msg: "No podemos enviar mensajes en este momento", err })
    }
    
}

const login = async  (req = request , res = response)=>{
    const {nombre , password} = req.body 

    try{
        const tempUser = await  Usuario.findOne({
            where:{
                nombre
            }
        })

        if(!tempUser){
            return res.status(200).json({status: 400 , msg: "Usuario o contraseña incorrectos"})
        }else{
            const {password: clave} = tempUser
            const autenticate  = await  bcryptjs.compareSync(password , clave)

            if(!autenticate){
                return res.status(200).json({status: 400 , msg: "Usuario o contraseña incorrectos"})
            }else{
                const {nombre: name , id_rol:rol , phone: telefono  } = tempUser
                const jwt   =  await generarJWT({uid:tempUser.id, rol})
                const user  = {nombre: name , rol , telefono , jwt  }
                
                res.status(200).json({status: 200, msg: 'Usuario logueado' , user})
            }
            
        }
        


    }catch(err){
        res.status(500).json({status: 500, msg: "Algo salió mal"})
    }
}

const register  = async (req = request, res = response ) => {
    const {body} = req 
    const tempUser = new Usuario({... body , id_rol:1 })

    try{
        const salt = bcryptjs.genSaltSync()
        tempUser.password = bcryptjs.hashSync( body.password , salt )
        await tempUser.save()

        res.status(200).json({status: 200 , msg:"Usuario Creado"})
        
    }catch(err){

        let say  = { 
            msg: 'No podemos crear usuarios en este momento', 
            status: 500
        } 

        const problem  = err.errors[0]
        const { type , path} = problem

        if(type == 'unique violation'){
            switch( path ){
                case 'nombre':
                    say.msg =  "Este nombre ya esta en uso"; 
                    say.status = 400
                break; 
                case 'phone': 
                    say.msg =  "Este teléfono ya esta en uso"; 
                    say.status = 400
                break; 
                default: 
            }
        }

        res.status(200).json({...say})
    }
    
}

const getUsers = async  (req  =request, res = response)=>{
    const { payload} = req
    const { rol } = payload
    
    if( rol != 2 ) return res.status(200).json({status: 401 , msg: 'Usted no dispone de un privilegio requerido'})

    try{
        let Usuarios = await Usuario.findAll()

        Usuarios = Usuarios.map((item , index) => {
            const  { id , nombre, phone, id_rol: rol}  =  item 
            return {id , nombre , phone , rol}
        })

        res.status(200).json({status: 200 , msg: "Usuarios resueltos con exito" , bag: Usuarios})
    }catch(err){
        return res.status(200).json({status: 500, msg: 'No podemos obtener Usuarios en este momento '})
    }

}

const changeRol = async(req = request , res = response) =>{
    const {payload } = req
    const {target , rol } = req.body

    if(payload.rol !=2 ) return res.status(200).json({status: 401, msg: 'No dispone de un privilegio requerio'})

    try{
        const tempUser = await  Usuario.findByPk(target)
        const tempRol  = await  Rol.findByPk(rol)
        
        if(!tempUser) return res.status(200).json({status: 400 , msg: 'Debe proporcionar un usuario válido'})

        if(!tempRol)  return res.status(200).json({status: 400,  msg: 'Debe proporcinar un rol válido'})

        await tempUser.update({id_rol: rol})

        res.status(200).json({status: 200 , msg: 'Rol cambiado con exito' })
    }catch(err){

        res.status(200).json({status: 500, msg: 'No podemos cambiar roles en este momento', err})
    }

}

const getContactos = async (req = request , res  = response)=>{
    const {payload } = req

    if(payload.rol!=2) return res.status(200).json({status: 401, msg: 'Usted no dispone de un privilegio requerido'})

    try{
        const tempContactos  = await Contacto.findAll() 

        res.status(200).json({status: 200 , msg: 'Contactos resueltos con éxito' , bag: tempContactos})
    }catch(err){
        return res.status(200).json({status: 500, msg: 'No podemos obtener mensajes en este momento', err})
    }
}

const deleteContacto   = async (req = request , res = response) =>{
    const  {payload} =req 
    if(payload.rol!=2) return res.status(200).json({status: 401 , msg: 'No dispone de un privilegio requerido'})

    const {target} = req.body
    try {
        const tempContacto = await Contacto.findByPk(target)

        if(!tempContacto) return res.status(200).json({status: 400, msg: 'Debe proporcionar un contacto válido'})
        
        await tempContacto.destroy()

        res.status(200).json({status: 200, msg: 'Contacto eliminado con exito'})

    }catch(err){
        res.status(200).json({status: 500, msg: 'No podemos eliminar contactos en este momento'})
    }
 

}




module.exports = {
    contactar , 
    login,
    register,
    getUsers , 
    changeRol, 
    getContactos, 
    deleteContacto
}