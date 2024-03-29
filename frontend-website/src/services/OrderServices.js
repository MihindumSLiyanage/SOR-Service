import requests from './httpServices';

const OrderServices = {
  addOrder(body) {
    return requests.post('/order/add', body);
  },
  // createOrder(body, headers) {
  //   return requests.post('/order/id', body, headers);
  // },
  getOrderByUser(body) {
    return requests.get('/order', body);
  },
  getOrderById(id, body) {
    return requests.get(`/order/${id}`, body);
  },
};

export default OrderServices;
