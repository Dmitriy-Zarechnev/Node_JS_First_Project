import express from 'express'
import bodyParser from 'body-parser'
import {productRouter} from './routes/products-router'
import {addressRouter} from './routes/addresses-router'

// create express app
const app = express()
const port = 5000

/* Пример с промежуточным слоем, который можно подключить ко всему приложению
const exampleMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.bla = 'hello'
    next()
}

Пример с промежуточным слоем, который можно подключить ко всему приложению
app.use(exampleMiddleWare)

Пример с промежуточным слоем, который можно подключить к одному запросу
addressRouter.get('/', exampleMiddleWare, (req: Request, res: Response) => {
    const addresses = addressesRepository.getAddress()
    res.send(addresses)
})
*/

app.use(bodyParser.json({}))

app.use('/products', productRouter)
app.use('/addresses', addressRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


