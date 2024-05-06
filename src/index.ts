import express from 'express'
import bodyParser from 'body-parser'
import {productRouter} from './routes/products-router'
import {addressRouter} from './routes/addresses-router'

// create express app
const app = express()
const port = 5000


app.use(bodyParser.json({}))

app.use('/products', productRouter)
app.use('/addresses', addressRouter)


// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


