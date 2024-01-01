const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    parent: {
        type: String,
        required: true,
    },
    products: {
        type: Number,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    children: [{}],
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

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

module.exports = Category;
