const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extracJwt = require('passport-jwt').ExtracJwt

const Usuario = require('../models/Usuarios')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
},(jwt_payload,done)=>{
    

}))