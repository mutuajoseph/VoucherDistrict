import http from "../http-common-token";

class VoucherDataService {
  getAll(username) {
    return http.get(`/vouchersByName/${username}`);
  }

  get(id) {
    return http.get(`/vouchers/${id}`);
  }

  create(data) {
    return http.post("/vouchers", data);
  }

  update(id, data) {
    return http.put(`/vouchers/${id}`, data);
  }

  activate(id,username) {
    return http.put(`/activate/${id}?username=${username}`);
  }

  delete(id) {
    return http.delete(`/vouchers/${id}`);
  }

  deleteAll() {
    return http.delete(`/vouchers`);
  }

  findByTitle(title) {
    return http.get(`/vouchers?title=${title}`);
  }
      
  editUser(data){
      return http.put("/update",data)
  }
}

export default new VoucherDataService();
