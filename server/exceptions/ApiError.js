module.exports = class ApiError extends Error {
  status;
  erorrs;

  constructor(status, message, erorrs) {
    super(message);
    this.status = status;
    this.erorrs = erorrs;
  }

  static UnauthorizedError() {
    return new ApiError(401, "Пользователь не авторизован");
  }

  static BadRequest(message, erorrs = []) {
    return new ApiError(400, message, erorrs);
  }
};
