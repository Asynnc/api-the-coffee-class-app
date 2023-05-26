import { Request, Response, Router } from 'express';
import { authUserController } from '../useCases/authentication';

const authRouter = Router();

authRouter.post('/', (request: Request, response: Response) => {
  return authUserController.handle(request, response);
});

export { authRouter };
