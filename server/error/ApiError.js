class ApiError extends Error {
  constructor(status, messege) {
    super();
    this.status = status;
    this.message = messege;
  }

  static badRequest(message) {
    return 404, message;
  }
  static internal(message) {
    return 500, message;
  }
  static forbidden(message) {
    return 403, message;
  }
}
module.exports = ApiError;
