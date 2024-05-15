const express = require('express');
const router = express.Router();
const ProductModel = require('../../models/product.model')
const ProductController = require('../../controllers/product.controller')

router.get('/', (res, req) => {
    res.send('Product route');
})

router.get('/list-product', ProductController.getListProduct)
router.get('/get-product/:_id', ProductController.getProduct)
router.post('/create-product', ProductController.createProduct)
router.put('/update-product/:_id', ProductController.updateProduct)
router.delete('/delete-product/:_id', ProductController.deleteProduct)


module.exports = router;