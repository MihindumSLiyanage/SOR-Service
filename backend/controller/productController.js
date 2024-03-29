const Product = require('../models/Product');

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).send({
            message: 'Product Added Successfully!',
        });
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).sort({ _id: -1 });
        res.send(products);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.send(product);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            product.title = req.body.title;
            product.slug = req.body.slug;
            product.description = req.body.description;
            product.parent = req.body.parent;
            product.children = req.body.children;
            product.type = req.body.type;
            // product.unit = req.body.unit;
            product.quantity = req.body.quantity;
            product.originalPrice = req.body.originalPrice;
            product.price = req.body.price;
            product.discount = req.body.discount;
            product.image = req.body.image;
            product.tag = req.body.tag;
            product.active = req.body.active;
            await product.save();
            res.send({ data: product, message: 'Product Updated successfully!' });
        }
    } catch (err) {
        res.status(404).send(err.message);
    }
};

const updateStatus = (req, res) => {
    const newStatus = req.body.status;
    Product.updateOne(
        { _id: req.params.id },
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
                    message: `Product ${newStatus} Successfully!`,
                });
            }
        }
    );
};

const updateActive = (req, res) => {
    const newActive = req.body.active;
    Product.updateOne(
        { _id: req.params.id },
        {
            $set: {
                active: newActive,
            },
        },
        (err) => {
            if (err) {
                res.status(500).send({
                    message: err.message,
                });
            } else {
                res.status(200).send({
                    message: `Product ${newActive} Successfully!`,
                });
            }
        }
    );
};

const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).send({
                message: err.message,
            });
        } else {
            res.status(200).send({
                message: 'Product Deleted Successfully!',
            });
        }
    });
};

const getShowingProducts = async (req, res) => {
    try {
        const products = await Product.find({ status: 'Show' }).sort({ _id: -1 });
        res.send(products);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getDiscountedProducts = async (req, res) => {
    try {
        const products = await Product.find({ discount: { $gt: 5 } }).sort({
            _id: -1,
        });
        res.send(products);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getStockOutProducts = async (req, res) => {
    try {
        const products = await Product.find({ quantity: { $lt: 1 } }).sort({
            _id: -1,
        });

        res.send(products);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getProductBySlug = async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug });
        res.send(product);
    } catch (err) {
        res.status(500).send({
            message: `Slug problem, ${err.message}`,
        });
    }
};

module.exports = {
    addProduct,
    getAllProducts,
    getShowingProducts,
    getDiscountedProducts,
    getStockOutProducts,
    getProductById,
    getProductBySlug,
    updateProduct,
    updateStatus,
    updateActive,
    deleteProduct,
};