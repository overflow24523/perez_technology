const { request, response } = require("express");
const { Servicio } = require("../../../db/models");

const Create =  async (req = request , res = response)=>{
    const {nombre}  = req.body
    const {payload} = req
    
    try{
        
        if(payload.rol !=2 && true) return res.status(200).json({status: 401, msg: 'Usted no dispone de un privilegio requerido'})
        const tempService  = new Servicio({nombre})
        await tempService.save()
        res.status(200).json({status: 200 , msg: 'Servicio Creado'  })

    }catch(err){
        let say  = { 
            msg: 'No podemos crear Servicios en este momento', 
            status: 500
        } 

        const problem  = err.errors[0]
        const { type , path} = problem

        if(type == 'unique violation'){
            switch( path ){
                case 'label':
                    say.msg =  "Este nombre de servicio ya esta en uso"; 
                    say.status = 400
                default: 
            }
        }

        res.status(200).json({...say})
    }

}
module.exports  = Create