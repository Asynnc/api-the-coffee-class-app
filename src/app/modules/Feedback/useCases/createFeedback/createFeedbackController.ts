import { Request, Response } from 'express';
import { CreateFeedbackService } from './createFeedbackService';

export class CreateFeedbackController {
  constructor(private createUserService: CreateFeedbackService) { }

  async handle(request: Request, response: Response) {

    const { type, comment, screenshot, mail, user, satisfaction } = request.body;

    const createFeedbackService = new CreateFeedbackService;

    const result = await createFeedbackService.execute({ type, comment, screenshot, mail, user, satisfaction });

    return response.json(result);
  }
}
