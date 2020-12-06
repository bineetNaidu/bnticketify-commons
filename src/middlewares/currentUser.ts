import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  email: string;
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.ticketifyJwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.ticketifyJwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (e) {}

  next();
};
