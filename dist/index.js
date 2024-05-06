"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// create express app
const app = (0, express_1.default)();
const port = 5000;
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
const addresses = [{ id: 1, value: 'Street 15' }, { id: 2, value: 'Street 20' }];
app.get('/products', (req, res) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(products.filter((el) => el.title.includes(searchString)));
    }
    else {
        res.send(products);
    }
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
app.delete('/products/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
