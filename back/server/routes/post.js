const { Router } = require('express')
const { register, login, contactar, getUsers, changeRol } = require('../controllers/post')
const { validarCampos } = require('../middlewares/validar-campos')
const { check } = require('express-validator')
const { security_post } = require('../middlewares/security')
const app = Router()

/**
 * 
 * app.post('/register', [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('phone', 'El Teléfono es obligatorio').isNumeric(),
        check('password')
          .not().isEmpty().withMessage('El password es obligatorio')
          .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
          .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/, "i").withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial'),
        validarCampos
      ], register);
 */


app.post('/register', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('phone' ,'El Teléfono es obligatorio').isNumeric(), 
    check('password' , 'La contraseña es obligatoria').not().isEmpty(), 
    validarCampos], register)

app.post('/login' , [
    check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password' , 'La contraseña es obligatoria').not().isEmpty(), 
    validarCampos
] , login)

app.post('/contactar' , [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(), 
  check('email', 'El email es obligatorio' ).isEmail(),
  check('telefono', 'El telefono es obligatorio').isNumeric(), 
  check('mensaje', 'El mensaje es obligatorio').not().isEmpty()
  , validarCampos]  , contactar)

app.post('/getUsers' , [security_post , validarCampos ] , getUsers )

app.post('/changeRol' , [security_post , 
  check('target' , 'El target es obligatorio').isNumeric(), 
  check('rol' , 'El nuevo rol es obligatorio').isNumeric(), 
   validarCampos] , changeRol)

module.exports = app
