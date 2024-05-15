const express = require('express');
const router = express.Router();
const path = require('path')
const ProductController = require('../controllers/product.controller')
const Product = require('../models/product.model')

router.use('/api/v1/product', require('./product'));
// router.use('/api/v2/user', require('./user'));

// router.get('/', async (req, res) => {
//     const indexView = path.join(__dirname, '../views/index.ejs')
//     const products = await ProductController.getListProduct()
//     res.render(indexView, { data: products })
// })
router.get('/', async (req, res) => {
    const homeView = path.join(__dirname, '../views/home.ejs')
    // const products = await ProductController.getListProduct()
    res.render(homeView)
})

// router.get('/products', async (req, res) => {
//     const productsView = path.join(__dirname, '../views/products.ejs')
//     Product.find({}, (error, data) => {
//     res.render(productsView, { products: data })
//     })
// })

router.get('/products', async (req, res) => {
    const productsView = path.join(__dirname, '../views/products.ejs');
    try {
        const products = await Product.find({});
        res.render(productsView, { products: products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi lấy dữ liệu sản phẩm');
    }
});

router.get('/detail_product/:id', async (req, res) => {
    const id = req.params.id
    const detail_productView = path.join(__dirname, '../views/detail_product.ejs')

    const product = await ProductController.getProduct(id)
    res.render(detail_productView, {product})
})

router.get('/login', async (req, res) => {
    const loginView = path.join(__dirname, '../views/login.ejs')
    res.render(loginView)
})

router.get('/register', async (req, res) => {
    const registerView = path.join(__dirname, '../views/register.ejs')
    res.render(registerView)
})

router.get('/cart', async (req, res) => {
    const cartView = path.join(__dirname, '../views/cart.ejs')
    res.render(cartView)
})

// router.get('/detail/:id', async (req, res) => {
//     const id = req.params.id
//     const indexView = path.join(__dirname, '../views/detail.ejs')
//     const product = await ProductController.getProduct(id)
//     res.render(indexView, { product })
// })

router.get('/admin', async (req, res) => {
    const indexView = path.join(__dirname, '../views/admin.ejs')
    res.render(indexView)
})

module.exports = router;