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


const Proveedor  = db.define('proveedor' , {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    }
})

const Categoria  = db.define('categorias' , {
    label:{
        type: DataTypes.STRING
    }
})

const Producto   = db.define('producto', {
    nombre:{
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    codigo: {
        type: DataTypes.STRING
    },
    id_categoria: {
        type: DataTypes.NUMBER
    },
    precio: {
        type: DataTypes.NUMBER
    },
    cantidad: {
        type: DataTypes.NUMBER
    },
    id_proveedor: {
        type: DataTypes.NUMBER
    }
})

const Servicio   = db.define('servicio' , {
    nombre: DataTypes.STRING
})



Usuario.belongsTo(Rol , {foreignKey: 'id_rol'})

Producto.belongsTo(Categoria , {foreignKey: 'id_categoria'})
Producto.belongsTo(Proveedor , {foreignKey: 'id_proveedor'})

module.exports = {
    Contacto,
    Usuario,
    Rol,
    Proveedor, 
    Categoria,
    Producto,
    Servicio
}