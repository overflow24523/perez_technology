const { request, response } = require("express");

const Create = (req = request , res = response)=>{
    return res.status(200).json({msg: 'Create User Online'})
}
module.exports  = Create