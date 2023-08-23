const {Router} = require('express')
const { security_post } = require('../../../middlewares/security')
const { validarCampos } = require('../../../middlewares/validar-campos')
const { check } = require('express-validator')
const Create = require('../controller/create')
const Delete = require('../controller/delete')
const Read = require('../controller/read')

const app = Router()


app.post('/create', [security_post,
    check('id_own', 'El dueño del  registro es obligatorio').isNumeric(),
    check('id_service', 'El servicio realizado es obligatorio').isNumeric(),
    check('importe', 'El importe es obligatorio').isNumeric(), 
    validarCampos], Create)

app.post('/read' , [security_post , validarCampos], Read)

app.post('/delete' , [security_post,
    check('target', 'La atención  a eliminar es obligatoria').isNumeric()
     , validarCampos], Delete)

module.exports = app
