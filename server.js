const express = require('express')
const cors = require('cors')
const Router = require('./routes/routes') 


const app = express()



app.use(cors())
app.use(express.json())

app.use('/api', Router)


app.listen( 4000, ()=> console.log('object') )