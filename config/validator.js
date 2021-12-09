const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        primerNombre: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The name must have more than three letters',
            'string.max': 'The name must have less than twenty letters',
            'string.empty':'The name is required',
            'string.pattern.base':'the name can only contain letters'
        }),
       apellido: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
           'string.empty' : 'The last name is required',
            'string.min': 'The last last name must have more than three letters',
            'string.max': 'The last last name must have less than twenty letters',
            'string.pattern.base':'the last name can only contain letters'
        }),
        contraseña: joi.string().max(16).min(8).trim().pattern(new RegExp('^[a-zA-Z0-9]{8,16}$')).required().messages({
            'string.empty' : 'The password is required',
            'string.min': 'The password must have more than three characters',
            'string.max': 'The password must have less than sixteen characters',
            'string.pattern.base':'The password can only contain letters, numbers'
        }),
        email: joi.string().email().trim().required().messages({
            'string.empty': 'The Email is required',
            'string.email':'The mail requires a valid format',
        }),
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