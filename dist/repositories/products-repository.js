"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepository = void 0;
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
exports.productsRepository = {
    findProducts(searchTerm) {
        if (searchTerm) {
            return products.filter((el) => el.title.includes(searchTerm));
        }
        else {
            return products;
        }
    },
    getProductByTitle(productTitle) {
        return products.find((el) => el.title === productTitle);
    },
    getProductById(productId) {
        return products.find((el) => el.id === productId);
    },
    createProduct(newProductTitle) {
        const newProduct = {
            id: +(new Date()),
            title: newProductTitle
        };
        products.push(newProduct);
        return newProduct;
    },
    updateProduct(productId, productTitle) {
        let product = products.find((el) => el.id === productId);
        if (product) {
            product.title = productTitle;
            return true;
        }
        else {
            return false;
        }
    },
    deleteProduct(productId) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === productId) {
                products.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
