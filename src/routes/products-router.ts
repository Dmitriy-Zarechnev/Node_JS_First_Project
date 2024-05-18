import {Router, Request, Response} from 'express'
import {productsRepository} from '../repositories/products-repository'


export const productRouter = Router({})


productRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepository.findProducts(
        req.query.title?.toString())
    res.send(foundProducts)
})


productRouter.get('/:productTitle', (req: Request, res: Response) => {
    const product = productsRepository.getProductByTitle(req.params.productTitle)

    product ? res.send(product) : res.send(404)
})

productRouter.get('/:id', (req: Request, res: Response) => {
    const product = productsRepository.getProductById(+req.params.id)

    product ? res.send(product) : res.send(404)
})

productRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = productsRepository.deleteProduct(+req.params.id)

    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
})


productRouter.post('/', (req: Request, res: Response) => {
    const newProduct = productsRepository.createProduct(req.body.title)

    res.status(201).send(newProduct)
})


productRouter.put('/:id', (req: Request, res: Response) => {
    const isUpdated = productsRepository.updateProduct(+req.params.id, req.body.title)

    if (isUpdated) {
        const product = productsRepository.getProductByTitle(req.body.title)
        res.send(product)
    } else {
        res.send(404)
    }
})


