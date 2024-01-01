const express = require('express');
const router = express.Router();
const {
  addReservation,
  getReservationByUser,
  getResrvationById,
} = require('../controller/userReservationController');

//add a reservation
router.post('/add', addReservation);

//get a reservation by id
router.get('/:id', getReservationByUser);

//get all reservation by a user
router.get('/', getResrvationById);

module.exports = router;
