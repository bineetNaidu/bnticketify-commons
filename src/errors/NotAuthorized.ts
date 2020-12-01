import CustomError from './CustomError';

export default class NotAuthorizedError extends CustomError {
  statusCode = 401;
  constructor() {
    super('Forbidden');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not Authorized' }];
  }
}
