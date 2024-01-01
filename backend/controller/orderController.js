const Order = require('../models/Order');
const { handleProductQuantity } = require('../config/others');

const addOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            ...req.body,
            user: req.user._id,
        });
        const order = await newOrder.save();
        res.status(201).send(order);
        handleProductQuantity(order.cart);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).sort({ _id: -1 });
        res.send(orders);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getOrderByUser = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.id }).sort({ _id: -1 });
        res.send(orders);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.send(order);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const updateOrder = (req, res) => {
    const newStatus = req.body.status;
    Order.updateOne(
        {
            _id: req.params.id,
        },
        {
            $set: {
                status: newStatus,
            },
        },
        (err) => {
            if (err) {
                res.status(500).send({
                    message: err.message,
                });
            } else {
                res.status(200).send({
                    message: 'Order Updated Successfully!',
                });
            }
        }
    );
};

const deleteOrder = (req, res) => {
    Order.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).send({
                message: err.message,
            });
        } else {
            res.status(200).send({
                message: 'Order Deleted Successfully!',
            });
        }
    });
};

module.exports = {
    addOrder,
    getAllOrders,
    getOrderById,
    getOrderByUser,
    updateOrder,
    deleteOrder,
};
