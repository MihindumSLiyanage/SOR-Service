const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        sku: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
        },
        // unit: {
        //     type: String,
        //     required: true,
        // },
        parent: {
            type: String,
        },
        children: {
            type: String,
        },
        image: {
            type: String,
            required: true,
        },
        originalPrice: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        discount: {
            type: Number,
            required: true,
            default: 0,
        },
        quantity: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        type: {
            type: String,
        },
        tag: [String],
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
        status: {
            type: String,
            enum: ['Show', 'Hide'],
            default: 'Show',
        },
    },

    {
        timestamps: true,
    }
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;   
