import { CreateFeedbackController } from './createFeedbackController';
import { CreateFeedbackService } from './createFeedbackService';

const createFeedbackService = new CreateFeedbackService();

const createFeedbackController = new CreateFeedbackController(
  createFeedbackService
);

export { createFeedbackController, createFeedbackService };
