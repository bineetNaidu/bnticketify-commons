import CustomError from './CustomError';

export default class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Page Not Found!');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors() {
    return [{ message: 'Page Not Found!' }];
  }
}
