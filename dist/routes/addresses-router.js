"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const express_1 = require("express");
const addresses_repository_1 = require("../repositories/addresses-repository");
exports.addressRouter = (0, express_1.Router)({});
exports.addressRouter.get('/', (req, res) => {
    const addresses = addresses_repository_1.addressesRepository.getAddress();
    res.send(addresses);
});
exports.addressRouter.get('/:id', (req, res) => {
    const address = addresses_repository_1.addressesRepository.findAddressById(+req.params.id);
    address ? res.send(address) : res.send(404);
});
