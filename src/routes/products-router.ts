import {Router, Request, Response} from 'express'
import {productsRepository} from '../repositories/products-repository'
import {body} from 'express-validator'
import {inputValidationMiddleware} from '../middlewares/input-validation-middleware'


export const productRouter = Router({})

const titleValidation = body('title')
    .trim().isLength({min: 3, max: 10})
    .withMessage('Title length should be from 3 to 10 symbols')


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

    isDeleted ? res.send(204) : res.send(404)
})


productRouter.post('/',
    titleValidation,
    inputValidationMiddleware,
    (req: Request, res: Response) => {

        const newProduct = productsRepository.createProduct(req.body.title)

        res.status(201).send(newProduct)
    })


productRouter.put('/:id',
    titleValidation,
    inputValidationMiddleware,
    (req: Request, res: Response) => {

        const isUpdated = productsRepository.updateProduct(+req.params.id, req.body.title)

        if (isUpdated) {
            const product = productsRepository.getProductByTitle(req.body.title)
            res.send(product)
        } else {
            res.send(404)
        }
    })


