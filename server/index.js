const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db')

const app = express()
const productRouter = require('./routes/productRouter')

var corsOptions = { //de aici o sa primi calluri api care totodata ii reactu ui
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.on('error', console.error.bind(console, 'MongoDb Connection error'))

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to food ordering' })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
app.use('/api/', productRouter)