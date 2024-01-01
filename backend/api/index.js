require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
var bodyParser = require('body-parser');

const connectDataBase = require('../config/db');
const productRoutes = require('../routes/productRoutes');
const categoryRoutes = require('../routes/categoryRoutes');
const couponRoutes = require('../routes/couponRoutes');
const adminRoutes = require('../routes/adminRoutes');
const orderRoutes = require('../routes/orderRoutes');
const userRoutes = require('../routes/userRoutes');
const reservationRoutes = require('../routes/reservationRoutes');
const userOrderRoutes = require('../routes/userOrderRoutes');
const { isAuth } = require('../config/auth');

connectDataBase();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//root route
app.get('/', (req, res) => {
    res.send('App works properly!');
});

//routes
app.use('/api/products/', productRoutes);
app.use('/api/category/', categoryRoutes);
app.use('/api/coupon/', couponRoutes);
app.use('/api/admin/', adminRoutes);
app.use('/api/user/', userRoutes);
app.use('/api/reservations/', isAuth, reservationRoutes);
app.use('/api/reservation/', isAuth, reservationRoutes);
app.use('/api/orders/', isAuth, orderRoutes);
app.use('/api/order/', isAuth, userOrderRoutes);

// Use express's default error handling middleware
app.use((err, req, res, next) => {
    if (res.headersSent) return next(err);
    res.status(400).json({ message: err.message });
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));