import {Router, Request, Response} from 'express'
import {addressesRepository} from '../repositories/addresses-repository'


export const addressRouter = Router({})


addressRouter.get('/', (req: Request, res: Response) => {
    const addresses = addressesRepository.getAddress()
    res.send(addresses)
})


addressRouter.get('/:id', (req: Request, res: Response) => {
    const address = addressesRepository.findAddressById(+req.params.id)

    address ? res.send(address) : res.send(404)
})

