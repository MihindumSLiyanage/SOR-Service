const express = require('express');
const router = express.Router();
const {
    addReservation,
    getAllReservations,
    getReservationById,
    updateReservation,
    updateStatus,
    deleteReservation,
    sendReminder,
    sendApprovedEmail,
    updatePaymentMethod,
    updateIsApproved,
    addProduct
} = require('../controller/reservationController');

//add a reservation 
router.post('/add', addReservation);

//get a reservation
router.get('/:id', getReservationById);

//get all reservation
router.get('/', getAllReservations);

//send reservation reminder
router.put('/sendReminder', sendReminder);

//send reservation approved
router.put('/sendApprovedEmail', sendApprovedEmail);

//update a reservation
router.put('/:id', updateReservation);

//update a reservation status
router.put('/status/:id', updateStatus);

//update a payment method
router.put('/paymentmethod/:id', updatePaymentMethod);

//update approved
router.put('/approved/:id', updateIsApproved);

//delete a reservation
router.delete('/:id', deleteReservation);

//add a product
router.post('/:id/product', addProduct);

module.exports = router;
