import { NextFunction, Response, Request } from 'express';
import NotAuthorizedError from '../errors/NotAuthorized';

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  next();
};

export default requireAuth;
