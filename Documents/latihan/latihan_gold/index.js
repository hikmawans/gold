const express = require('express')
const morgan = require('morgan')
const app = express()


const host = 'localhost'
const port = 3000

const item = require('./controlleres/item')

app.use(morgan('combined'))
app.use(express.json())


app.get('/', function (req, res){
    res.json({
        host: host,
        port: port
    })
})

app.use('/item', item)



app.listen(port, host, () => {
    console.log(`server running on: http://${host}:${port}`)
})