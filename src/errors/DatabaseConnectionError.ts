import CustomError from './CustomError';

export default class DatabaseConnectionError extends CustomError {
  reason: string = 'Error connection on Database';
  statusCode: number = 500;
  constructor() {
    super('Error connecting to DB');

    // only because fo TS and extending build in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
