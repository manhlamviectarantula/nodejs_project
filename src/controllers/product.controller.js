const ProductModel = require('../models/product.model')

class ProductController {
    async getListProduct(req, res) {
        const products = await ProductModel.find()
        // return res.json(products)
        return products
    }

    // async getProduct(req, res) {
    //     const product = await ProductModel.findById(req.params._id)
    //     return res.json(product)
    // }

    async getProduct(id) {
        const product = await ProductModel.findById(id)
        return product
    }

    async createProduct(req, res) {
        const product = req.body
        console.log(product)

        const newProduct = new ProductModel(product)
        await newProduct.save()

        return res.json(newProduct)
    }

    async updateProduct(req, res) {
        const Product = req.body

        const updatedProduct = await ProductModel.findByIdAndUpdate(req.params._id, Product)

        return res.json(updatedProduct)
    }

    async deleteProduct(req, res) {
        const id = req.params._id
        const deleteProduct = await ProductModel.findByIdAndDelete(id)
        return res.json(deleteProduct)
    }
}

module.exports = new ProductController()