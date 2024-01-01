const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({

    vehicleType: {
        type: String,
        required: true,
    },
    vehicleNo: {
        type: String,
        required: true,
    },
    vehicleModel: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    userName: {
        type: String,
        required: true,
    },
    contactNo: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
    },
    serviceType: {
        type: String,
        required: true,
    },
    serviceDate: {
        type: Date,
        required: true,
    },
    serviceTime: {
        type: String,
        required: true,
    },
    slot: {
        type: Number
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Completed']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    subTotal: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
    },
    paymentMethod: {
        type: String,
    },
    cardInfo: {
        type: Object,
    },
    products: [{}]
})

const Reservation = mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;