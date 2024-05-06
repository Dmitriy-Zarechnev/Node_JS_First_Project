import {Router, Request, Response} from 'express'

// types for APP
type Addresses = {
    id: number,
    value: string
}
const addresses: Addresses[] = [{id: 1, value: 'Street 15'}, {id: 2, value: 'Street 20'}]


export const addressRouter = Router({})

// get request
addressRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressRouter.get('/:id', (req: Request, res: Response) => {
    let address = addresses.find((el) => el.id === +req.params.id)

    address ? res.send(address) : res.send(404)
})

