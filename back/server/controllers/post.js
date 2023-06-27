const { request, response } = require("express")
const { Usuario } = require("../db/models")

const register  = async (req = request, res = response ) => {
    const Usuarios = await Usuario.findAll()

    res.status(200).json({msg: " register online" , Usuarios})
}

module.exports = {
    register 
}