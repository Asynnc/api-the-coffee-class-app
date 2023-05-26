import { Request, Response, Router } from 'express';
import { createUserController } from '../useCases/createUser';

const usersRouter = Router();

usersRouter.post('/', (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export { usersRouter };
