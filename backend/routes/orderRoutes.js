const express = require('express');
const router = express.Router();
const {
    addOrder,
    getAllOrders,
    getOrderById,
    getOrderByUser,
    updateOrder,
    deleteOrder,
} = require('../controller/orderController');

//add a order
router.post('/add', addOrder);

//get all orders
router.get('/', getAllOrders);

//get all order by a user
router.get('/user/:id', getOrderByUser);

//get a order by id
router.get('/:id', getOrderById);

//update a order
router.put('/:id', updateOrder);

//delete a order
router.delete('/:id', deleteOrder);

module.exports = router;
