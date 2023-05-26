import { Request, Response, Router } from 'express';
import { createFeedbackController } from '../useCases/createFeedback';

const feedbacksRouter = Router();

feedbacksRouter.post('/', (request: Request, response: Response) => {
  return createFeedbackController.handle(request, response);
});

export { feedbacksRouter };
