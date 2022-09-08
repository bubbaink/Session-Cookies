const {check, body} = require("express-validator")

module.exports = [
    check ("name")
        .notEmpty().withMessage("Debes ingresar tu nombre de usuario")
        .isLength({min:2}).withMessage("debe tenes como minimo 2 caracteres"),

    check("color")
        .notEmpty().withMessage('Debes elegir un color'),

    check("email")
        .notEmpty().withMessage('Debes ingresar tu email')
        .isEmail().withMessage('Email no es valido'),

    check("edad")
        .notEmpty().withMessage("Debes ingresar tu edad")
        .isLength({min:2}).withMessage("debe tenes como minimo 2 caracteres")
    
]