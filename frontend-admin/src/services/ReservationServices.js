import requests from './httpService';

const ReservationServices = {

    getAllReservations(body, headers) {
        return requests.get('/reservations', body, headers);
    },

    getReservationById(id) {
        return requests.get(`/reservations/${id}`);
    },

    sendReminder(body) {
        return requests.put('/reservations/sendReminder', body);
    },

    sendApprovedEmail(body) {
        return requests.put('/reservations/sendApprovedEmail', body);
    },

    addReservation(body) {
        return requests.post('/reservations/add', body);
    },

    addAllReservations(body) {
        return requests.post('/reservations/all', body);
    },

    updateReservation(id, body, headers) {
        return requests.put(`/reservations/${id}`, body, headers);
    },

    updateStatus(id, body) {
        return requests.put(`/reservations/status/${id}`, body);
    },

    updatePaymentMethod(id, body) {
        return requests.put(`/reservations/paymentMethod/${id}`, body);
    },

    updateIsApproved(id, body) {
        return requests.put(`/reservations/approved/${id}`, body);
    },

    deleteReservation(id) {
        return requests.delete(`/reservations/${id}`);
    },

    addProduct(id, body) {
        return requests.post(`/reservations/${id}/product`, body);
    }
};

export default ReservationServices;
