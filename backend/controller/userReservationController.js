const Reservation = require('../models/Reservation');

const addReservation = async (req, res) => {
  try {
    const newReservation = new Reservation({
      ...req.body,
      user: req.user._id,
    });
    const reservation = await newReservation.save();
    res.status(201).send(reservation);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getReservationByUser = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user._id }).sort({ _id: -1 });
    res.send(reservations);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getResrvationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.send(reservation);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addReservation,
  getReservationByUser,
  getResrvationById,
};
