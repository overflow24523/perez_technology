const { DataTypes } = require("sequelize");
const { db } = require("./conexion");

const Usuario  = db.define('user', { 
    nombre: {
        type: DataTypes.STRING
    }, 
    password:{
        type: DataTypes.STRING
    },
    id_rol: {
        type: DataTypes.NUMBER
    }, 
    phone: {
        type: DataTypes.STRING
    }
})

const Contacto = db.define('contacto' , {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    }, 
    mensaje: {
        type: DataTypes.STRING
    }
})

const Rol = db.define('role' , {
    label:{
        type: DataTypes.STRING
    }
})

Usuario.belongsTo(Rol , {foreignKey: 'id_rol'})

module.exports = {
    Contacto,
    Usuario,
    Rol
}