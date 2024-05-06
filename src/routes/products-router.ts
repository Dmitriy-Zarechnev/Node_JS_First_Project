import {Router, Request, Response} from 'express'

// types for APP
type Products = {
    id: number,
    title: string
}
const products: Products[] = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]


export const productRouter = Router({})

// get request
productRouter.get('/', (req: Request, res: Response) => {
    if (req.query.title) {
        let searchString = req.query.title.toString()
        res.send(products.filter((el) => el.title.includes(searchString)))
    } else {
        res.send(products)
    }
})
productRouter.get('/:productTitle', (req: Request, res: Response) => {
    let product = products.find((el) => el.title === req.params.productTitle)

    product ? res.send(product) : res.send(404)
})

// delete request
productRouter.delete('/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204)
            return
        }
    }

    res.send(404)
})

// post request
productRouter.post('/', (req: Request, res: Response) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    }

    products.push(newProduct)
    res.status(201).send(newProduct)
})

// put request
productRouter.put('/:id', (req: Request, res: Response) => {
    let product = products.find((el) => el.id === +req.params.id)

    if (product) {
        product.title = req.body.title
        res.send(product)
    } else {
        res.send(404)
    }
})


