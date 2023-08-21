const {Router} = require('express')
const { security_post } = require('../../../middlewares/security')
const { validarCampos } = require('../../../middlewares/validar-campos')
const { check } = require('express-validator')
const Create = require('../controller/create')

const app = Router()


app.post('/create', [security_post,
    check('id_own', 'El dueño del  registro es obligatorio').isNumeric(),
    check('id_service', 'El servicio realizado es obligatorio').isNumeric(),
    check('importe', 'El importe es obligatorio').isNumeric(), 
    validarCampos], Create)

module.exports = app
