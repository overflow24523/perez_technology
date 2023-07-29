const {Router } = require('express')
const { security_post } = require('../../../middlewares/security')
const { validarCampos } = require('../../../middlewares/validar-campos')
const { check } = require('express-validator')

const Create  = require('../controller/Create')
const Read    = require('../controller/Read')
const Update  = require('../controller/Update')
const Delete  = require('../controller/Delete')

const app = Router()



app.post('/create', [security_post, 
    check('nombre' , 'El nombre es obligatorio').not().isEmpty() ,
    check('descripcion' , 'La descripcion es obligatoria').not().isEmpty() , validarCampos] , Create )

app.post('/read' , [security_post,  validarCampos], Read)

app.post('/update' ,[security_post, 
    check('target', 'El proveedor a editar es obligatorio').isNumeric() 
    , validarCampos]  ,Update )


app.post('/delete' ,[security_post , 
    check('target' , 'El proveedor a eliminar es obligatorio').isNumeric()
    ,  validarCampos] , Delete )

module.exports  = app