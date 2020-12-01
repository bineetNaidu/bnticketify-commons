import { ValidationError } from 'express-validator';
import CustomError from './CustomError';

export default class RequestValidationError extends CustomError {
  statusCode: number = 400;
  constructor(public errors: ValidationError[]) {
    super('Invalid Request Parameter');

    // only because fo TS and extending build in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.map((e) => ({
      message: e.msg,
      field: e.param,
    }));
  }
}
