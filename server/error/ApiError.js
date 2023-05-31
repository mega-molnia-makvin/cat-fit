const alert = require('alert');
class ApiError extends Error {
  constructor(status, messege) {
    super();
    this.status = status;
    this.message = messege;
  }

  static badRequest(message) {
    return alert(message);
  }
  static internal(message) {
    return alert(message);
  }
  static forbidden(message) { //нет доступа
    return alert(message);
  }
}
module.exports = ApiError;
