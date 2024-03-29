import requests from './httpService';

const AdminServices = {

  registerAdmin(body) {
    return requests.post('/admin/register', body);
  },

  loginAdmin(body) {
    return requests.post(`/admin/login`, body);
  },

  forgotPassword(body) {
    return requests.put('/admin/forgot-password', body);
  },

  resetPassword(body) {
    return requests.put('/admin/reset-password', body);
  },

  signUpWithProvider(body) {
    return requests.post('/admin/signup', body);
  },

  addStaff(body) {
    return requests.post('/admin/add', body);
  },

  getAllStaff(body) {
    return requests.get('/admin', body);
  },

  getStaffById(id, body) {
    return requests.get(`/admin/${id}`, body);
  },

  updateStaff(id, body) {
    return requests.put(`/admin/${id}`, body);
  },

  deleteStaff(id) {
    return requests.delete(`/admin/${id}`);
  },
};

export default AdminServices;
