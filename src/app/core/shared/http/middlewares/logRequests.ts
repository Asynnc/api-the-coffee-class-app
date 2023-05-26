import { NextFunction, Request, Response } from 'express';

function LogRequests(request: Request, response: Response, next: NextFunction) {


  const { method, url } = request;
  const { statusCode } = response;

  console.log('==========');
  const logLabel = `${statusCode} [${method.toUpperCase()}] ${url}`;
  console.info(logLabel);
  console.time(logLabel);
  next();
  console.timeEnd(logLabel);
  console.log('==========');
}

export { LogRequests };
