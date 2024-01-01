import requests from './httpServices';

const ReservationServices = {

    // updateReservation(id, body, headers) {
    //     return requests.put(`/reservation/${id}`, body, headers);
    // },

    addReservation(body) {
        return requests.post('/reservation/add', body);
    },
    getReservationByUser(body) {
        return requests.get('/reservation', body);
    },
    getReservationById(id, body) {
        return requests.get(`/reservation/${id}`, body);
    },
};

export default ReservationServices;
