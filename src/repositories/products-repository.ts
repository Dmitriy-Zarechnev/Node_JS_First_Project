type Products = {
    id: number,
    title: string
}
const products: Products[] = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

export const productsRepository = {
    findProducts(searchTerm: string | null | undefined) {
        if (searchTerm) {
            return products.filter((el) => el.title.includes(searchTerm))
        } else {
            return products
        }
    },

    getProductByTitle(productTitle: string) {
        return products.find((el) => el.title === productTitle)
    },

    getProductById(productId: number) {
        return products.find((el) => el.id === productId)
    },

    createProduct(newProductTitle: string) {
        const newProduct = {
            id: +(new Date()),
            title: newProductTitle
        }

        products.push(newProduct)
        return newProduct
    },

    updateProduct(productId: number, productTitle: string) {
        let product = products.find((el) => el.id === productId)

        if (product) {
            product.title = productTitle
            return true
        } else {
            return false
        }
    },

    deleteProduct(productId: number) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === productId) {
                products.splice(i, 1)
                return true
            }
        }
        return false
    }
}