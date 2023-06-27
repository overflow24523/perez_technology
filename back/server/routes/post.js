const { Router } = require('express')
const { register } = require('../controllers/post')
const { validarCampos } = require('../middlewares/validar-campos')
const { check } = require('express-validator')
const app = Router()
app.post('/register', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('phone' ,'El Teléfono es obligatorio').isNumeric(), 
    // check('password' , 'El password es obligatorio'), 
    validarCampos], register)


module.exports = app