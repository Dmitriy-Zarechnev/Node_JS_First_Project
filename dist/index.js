"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_router_1 = require("./routes/products-router");
const addresses_router_1 = require("./routes/addresses-router");
// create express app
const app = (0, express_1.default)();
const port = 5000;
/* Пример с промежуточным слоем, который можно подключить ко всему приложению
const exampleMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.bla = 'hello'
    next()
}

Пример с промежуточным слоем, который можно подключить ко всему приложению
app.use(exampleMiddleWare)

Пример с промежуточным слоем, который можно подключить к одному запросу
addressRouter.get('/', exampleMiddleWare, (req: Request, res: Response) => {
    const addresses = addressesRepository.getAddress()
    res.send(addresses)
})
*/
app.use(body_parser_1.default.json({}));
app.use('/products', products_router_1.productRouter);
app.use('/addresses', addresses_router_1.addressRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
