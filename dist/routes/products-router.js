"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const products_repository_1 = require("../repositories/products-repository");
exports.productRouter = (0, express_1.Router)({});
exports.productRouter.get('/', (req, res) => {
    var _a;
    const foundProducts = products_repository_1.productsRepository.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundProducts);
});
exports.productRouter.get('/:productTitle', (req, res) => {
    const product = products_repository_1.productsRepository.getProductByTitle(req.params.productTitle);
    product ? res.send(product) : res.send(404);
});
exports.productRouter.get('/:id', (req, res) => {
    const product = products_repository_1.productsRepository.getProductById(+req.params.id);
    product ? res.send(product) : res.send(404);
});
exports.productRouter.delete('/:id', (req, res) => {
    const isDeleted = products_repository_1.productsRepository.deleteProduct(+req.params.id);
    if (isDeleted) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
exports.productRouter.post('/', (req, res) => {
    const newProduct = products_repository_1.productsRepository.createProduct(req.body.title);
    res.status(201).send(newProduct);
});
exports.productRouter.put('/:id', (req, res) => {
    const isUpdated = products_repository_1.productsRepository.updateProduct(+req.params.id, req.body.title);
    if (isUpdated) {
        const product = products_repository_1.productsRepository.getProductByTitle(req.body.title);
        res.send(product);
    }
    else {
        res.send(404);
    }
});
