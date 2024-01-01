const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        invoice: {
            type: Number,
            required: false,
        },
        cart: [{}],
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        subTotal: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            required: true,
            default: 0,
        },
        total: {
            type: Number,
            required: true,
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        cardInfo: {
            type: Object,
            required: false,
        },
        status: {
            type: String,
            enum: ['Pending', 'Processing', 'Finished'],
        },
    },
    {
        timestamps: true,
    }
);

const Order =
    mongoose.models.Order ||
    mongoose.model(
        'Order',
        orderSchema.plugin(AutoIncrement, {
            inc_field: 'invoice',
            start_seq: 10000,
        })
    );

module.exports = Order;
