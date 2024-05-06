"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// create express app
const app = (0, express_1.default)();
const port = 5000;
const products = [{ title: 'tomato' }, { title: 'orange' }];
const addresses = [{ id: 1, value: 'Street 15' }, { id: 2, value: 'Street 20' }];
app.get('/products', (req, res) => {
    res.send(products);
});
app.get('/products/:productTitle', (req, res) => {
    let product = products.find((el) => el.title === req.params.productTitle);
    product ? res.send(product) : res.send(404);
});
app.get('/addresses', (req, res) => {
    res.send(addresses);
});
app.get('/addresses/:id', (req, res) => {
    let address = addresses.find((el) => el.id === +req.params.id);
    address ? res.send(address) : res.send(404);
});
// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
