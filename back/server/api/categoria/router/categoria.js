const {Router } = require('express')
const Create   = require('../../categoria/controller/Create')
const Read     = require('../../categoria/controller/Read')
const Update   = require('../../categoria/controller/Update')
const Delete   = require('../../categoria/controller/Delete')
const { security_post } = require('../../../middlewares/security')
const { validarCampos } = require('../../../middlewares/validar-campos')
const { check } = require('express-validator')


const app = Router()

app.post('/create', [security_post, 
    check('label' , 'El nombre de la categoría es obligatorio' ).not().isEmpty()
    , validarCampos],  Create)

app.post('/read' , [security_post , validarCampos] , Read)
app.post('/update' , [security_post , 
    check('target' , 'La categoría a editar es obligatoria').isNumeric()
    , validarCampos], Update)

app.post('/delete' , [security_post, 
    check('target' , 'Debe proporcionar una categoría válida').isNumeric()     
    , validarCampos], Delete)



module.exports  = app