class ExceptionHandler extends Error {
  constructor(message, statusCode, additionalData = null) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    this.additionalData = additionalData;
  }
}

module.exports = ExceptionHandler;
