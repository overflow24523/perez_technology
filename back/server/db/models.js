const { DataTypes } = require("sequelize");
const { db } = require("./conexion");

const Usuario  = db.define('user', {
    name: {
        type: DataTypes.STRING
    }, 
    password:{
        type: DataTypes.STRING
    },
    id_rol: {
        type: DataTypes.NUMBER
    }, 
    id_detalles: {
        type: DataTypes.NUMBER
    }

})

module.exports = {
    Usuario
}