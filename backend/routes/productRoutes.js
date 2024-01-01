const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getShowingProducts,
    getDiscountedProducts,
    getStockOutProducts,
    getProductById,
    getProductBySlug,
    addProduct,
    updateProduct,
    updateStatus,
    updateActive,
    deleteProduct,
    addReview
} = require('../controller/productController');

//add a product
router.post('/add', addProduct);

//get all products
router.get('/', getAllProducts);

//get a product
router.post('/:id', getProductById);

//update a product
router.put('/:id', updateProduct);

//update a product status
router.put('/status/:id', updateStatus);

//update a product active
router.put('/active/:id', updateActive);

//delete a product
router.delete('/:id', deleteProduct);

//get showing products only
router.get('/show', getShowingProducts);

//get discounted products only
router.get('/discount', getDiscountedProducts);

//get all stock out products(?stock-out)
router.get('/stock-out', getStockOutProducts);

//get a product by slug
router.get('/:slug', getProductBySlug);


module.exports = router;