import express, {Request, Response} from 'express'

// create express app
const app = express()
const port = 5000


const products: Products[] = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]
const addresses: Addresses[] = [{id: 1, value: 'Street 15'}, {id: 2, value: 'Street 20'}]

app.get('/products', (req: Request, res: Response) => {
    if (req.query.title) {
        let searchString = req.query.title.toString()
        res.send(products.filter((el) => el.title.includes(searchString)))
    } else {
        res.send(products)
    }
})
app.get('/products/:productTitle', (req: Request, res: Response) => {
    let product = products.find((el) => el.title === req.params.productTitle)

    product ? res.send(product) : res.send(404)
})
app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    let address = addresses.find((el) => el.id === +req.params.id)

    address ? res.send(address) : res.send(404)
})

app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204)
            return
        }
    }

    res.send(404)
})

// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// types for APP
type Products = {
    id: number,
    title: string
}

type Addresses = {
    id: number,
    value: string
}