console.log('hello world')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))

app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world x2'
    })
})

app.listen(process.env.PORT || 8081)