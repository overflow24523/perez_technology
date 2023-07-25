const {Router } = require('express')
const Create = require('../controller/Create')
const Read   = require('../controller/Read')
const Update = require('../controller/Update')
const Delete  = require('../controller/Delete')
const { security_post } = require('../../../middlewares/security')
const { validarCampos } = require('../../../middlewares/validar-campos')
const { check } = require('express-validator')
const app = Router()

app.post('/create' ,[security_post, 
    check('nombre' ,'El nombre del producto es oblgatorio').not().isEmpty(),
    check('descripcion', 'La descripción del producto es obligatoria').not().isEmpty(),
    check('codigo', 'El codigo de barras es obligatorio').not().isEmpty(),
    check('id_categoria', 'La categoría es obligatoria').isNumeric(),
    check('precio', 'El precio del producto es obligatorio').isNumeric(),
    check('cantidad', 'La cantidad de items del producto es obligatoria').isNumeric(),
    check('id_proveedor', 'El proveedor del producto es obligatorio').isNumeric()
    , validarCampos] , Create)

app.post('/read' , [security_post, validarCampos] , Read)

app.post('/update', [security_post ,
    check('target', 'El producto a editar es obligatorio').isNumeric() ,
    validarCampos], Update)

app.post('/delete' , [security_post,
    check('target', 'El producto a eliminar es obligatorio').isNumeric(),
     validarCampos] ,   Delete)


module.exports  = app