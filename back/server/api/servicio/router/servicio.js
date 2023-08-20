const {Router } = require('express')
const { security_post } = require('../../../middlewares/security')
const { validarCampos } = require('../../../middlewares/validar-campos')
const { check } = require('express-validator')

const Create = require('../controller/Create')
const app = Router()

app.post('/create',  [security_post ,
    check('nombre', 'El nombre del servicio es obligatorio').not().isEmpty()
    , validarCampos] , Create)

module.exports = app