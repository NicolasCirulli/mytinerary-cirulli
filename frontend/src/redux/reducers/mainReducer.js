import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import usuariosReducer from './usuariosReducer'

const mainReducer = combineReducers({

    citiesReducer,
    itinerariesReducer,
    usuariosReducer

})

export default mainReducer