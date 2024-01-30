import { NextFunction, Request, Response } from 'express';
import { AppError, MissingParamError } from '../errors';

async function globalError(err: Error, request: Request, response: Response, next: NextFunction) {

  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  if (err instanceof MissingParamError) {
    response.status(422).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  });

}

export default globalError;
