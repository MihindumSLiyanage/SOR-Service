const Reservation = require('../models/Reservation');
const { sendEmail } = require('../config/auth');
const { handleProductQuantity } = require('../config/others');

const addReservation = async (req, res) => {
    try {
        const newReservation = new Reservation(req.body);
        await newReservation.save();
        res.status(200).send({
            message: 'Reservation Added Successfully!',
        });
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({}).sort({ _id: -1 });
        res.send(reservations);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        res.send(reservation);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const updateReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (reservation) {
            reservation.vehicleType = req.body.vehicleType;
            reservation.vehicleNo = req.body.vehicleNo;
            reservation.vehicleModel = req.body.vehicleModel;
            reservation.contactNo = req.body.contactNo;
            reservation.email = req.body.email;
            reservation.serviceType = req.body.serviceType;
            reservation.serviceDate = req.body.serviceDate;
            reservation.serviceTime = req.body.serviceTime;
            reservation.slot = req.body.slot;
            await reservation.save();
            res.send({ data: reservation, message: 'Reservation updated successfully!' });
        }
    } catch (err) {
        res.status(404).send(err.message);
    }
};

const updateStatus = (req, res) => {
    const newStatus = req.body.status;
    Reservation.updateOne(
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
                    message: `Reservation ${newStatus} Successfully!`,
                });
            }
        }
    );
};

const updatePaymentMethod = (req, res) => {
    const newPaymentMethod = req.body.paymentMethod;
    Reservation.updateOne(
        { _id: req.params.id },
        {
            $set: {
                paymentMethod: newPaymentMethod,
            },
        },
        (err) => {
            if (err) {
                res.status(500).send({
                    message: err.message,
                });
            } else {
                res.status(200).send({
                    message: `Reservation Update Successfully!`,
                });
            }
        }
    );
};

const updateIsApproved = (req, res) => {
    const approved = req.body.isApproved;
    Reservation.updateOne(
        { _id: req.params.id },
        {
            $set: {
                isApproved: approved,
            },
        },
        (err) => {
            if (err) {
                res.status(500).send({
                    message: err.message,
                });
            } else {
                res.status(200).send({
                    message: `Reservation Updated Successfully!`,
                });
            }
        }
    );
};

const deleteReservation = (req, res) => {
    Reservation.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).send({
                message: err.message,
            });
        } else {
            res.status(200).send({
                message: 'Reservation Deleted Successfully!',
            });
        }
    });
};

const sendReminder = async (req, res) => {
    const email = await Reservation.findOne({ email: req.body.email });
    const date = await Reservation.findOne({ date: req.body.date });
    const startTime = await Reservation.findOne({ startTime: req.body.startTime });
    const serviceType = await Reservation.findOne({ serviceType: req.body.serviceType });
    const vehicleNo = await Reservation.findOne({ vehicleNo: req.body.vehicleNo });

    if (!email && !date && !startTime && !serviceType && !vehicleNo) {
        return res.status(404).send({
            message: 'User Not found with this Account!',
        });
    } else {
        const body = {
            from: process.env.EMAIL_USER,
            to: `${req.body.email}`,
            subject: 'Reservation Reminder',
            html: `<h2>Hello ${req.body.email}</h2>
        <p>This is a reminder from <strong>SOR Service</strong> about your appointment on ${req.body.date} and ${req.body.startTime} on Vehicle No ${req.body.vehicleNo} as the service type ${req.body.serviceType}</p>

        <p>If you need to reschedule, please reply to this email or call us at <strong> 037 2230564</strong>.</p>

        <p style="margin-top: 35px;">If you did not initiate this request, please contact us immediately at support@sorsevice12.com</p>

        <p style="margin-bottom:0px;">Thank you</p>
        <strong>SOR Service Team</strong>
             `,
        };

        const message = 'Reminder send to the User!';
        sendEmail(body, res, message);
    }
};

const sendApprovedEmail = async (req, res) => {
    const email = await Reservation.findOne({ email: req.body.email });
    const date = await Reservation.findOne({ date: req.body.date });
    const startTime = await Reservation.findOne({ startTime: req.body.startTime });
    const serviceType = await Reservation.findOne({ serviceType: req.body.serviceType });
    const vehicleNo = await Reservation.findOne({ vehicleNo: req.body.vehicleNo });

    if (!email && !date && !startTime && !serviceType && !vehicleNo) {
        return res.status(404).send({
            message: 'User Not found with this Account!',
        });
    } else {
        const body = {
            from: process.env.EMAIL_USER,
            to: `${req.body.email}`,
            subject: 'Reservation Approved',
            html: `<h2>Hello ${req.body.email}</h2>
        <p>Your Reservation has been approved by the admins of SOR Service center. Below you can see all the reservation details.</p>
        <p>This is a reminder from <strong>SOR Service</strong> about your appointment on ${req.body.date} and ${req.body.startTime} on Vehicle No ${req.body.vehicleNo} as the service type ${req.body.serviceType}</p>

        <p>If you need to reschedule, please reply to this email or call us at <strong> 037 2230564</strong>.</p>

        <p style="margin-top: 35px;">If you did not initiate this request, please contact us immediately at support@sorsevice12.com</p>

        <p style="margin-bottom:0px;">Thank you</p>
        <strong>SOR Service Team</strong>
             `,
        };

        const message = 'Approved email send to the User!';
        sendEmail(body, res, message);
    }
};

const addProduct = async (req, res) => {
    try {
        const newReservation = new Reservation({
            ...req.body,
            product: req.product._id,
        });
        const reservation = await newReservation.save();
        res.status(201).send(reservation);
        handleProductQuantity(reservation.products);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

module.exports = {
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
};