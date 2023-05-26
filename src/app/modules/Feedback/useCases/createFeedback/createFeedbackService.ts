import { AppError, MissingParamError } from '../../../../core/shared/http/errors';
import { Feedback } from '../../../../core/shared/infra/database/mongodb/models/Feedback';
import { SubmitFeedbackService } from '../../../Mail/useCases/submitFeedback/submitFeedbackService';
import { ICreateFeedback } from './createFeedbackDTO';

export class CreateFeedbackService {
  public async execute({ type, comment, screenshot, mail, satisfaction }: ICreateFeedback) {
    if (!type) {
      throw new MissingParamError('Type');
    }

    if (!comment) {
      throw new MissingParamError('Comment');
    }

    if (!satisfaction) {
      throw new MissingParamError('Satisfaction');
    }

    if (!mail) {
      throw new MissingParamError('Email');
    }

    const feedbackService = new SubmitFeedbackService;

    if (screenshot && !screenshot.startsWith('data:image/png;base64,')) {
      throw new AppError('Invalid screenshot format.', 400);
    }

    await feedbackService.sendMail({
      mail: mail,
      subject: 'Novo Feedback!',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #272727;">',
        '<h1>Feedback</h1>',
        `<p>Tipo: ${type}</p>`,
        `<p>Satisfação: ${satisfaction} </p>`,
        `<p>Email: ${mail} </p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot && ('<p>Screenshot: </p>' && `<img src="${screenshot}" alt="Imagem do print da tela" />`),
        '</div>',
      ].join('\n')
    });

    const feedback = Feedback.create({
      user: mail,
      type,
      satisfaction,
      comment,
    });

    return feedback;
  }
}
