const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        primerNombre: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The name must have more than three characters',
            'string.max': 'The name must have less than twenty characters'
        }),
       apellido: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The last name must have more than three characters',
            'string.max': 'The last name must have less than twenty characters'
        }),
        contraseña: joi.string().max(16).min(8).trim().pattern(new RegExp('^[a-zA-Z0-9]{8,16}$')).required().messages({
            'string.min': 'The password must have more than three characters',
            'string.max': 'The password must have less than sixteen characters'
        }),
        email: joi.required(),
        fotoPerfil: joi.required(),
        pais: joi.required()
    })

    const validate = schema.validate(req.body, { abortEarly: false })

    if(validate.error) {
        return res.json( { success: false, response: validate.error.details } )
    }

    next()
}

module.exports = validator 