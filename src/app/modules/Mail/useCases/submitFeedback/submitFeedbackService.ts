import nodemailer from 'nodemailer';
import { ISendMailData } from './submitFeedbackDTO';
import { AppError, MissingParamError } from '../../../../core/shared/http/errors';
import { isValidEmail } from '../../../../core/utils/functions/isValidMail';

const transport = nodemailer.createTransport({
  host: process.env.TRANSPORT_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.TRANSPORT_AUTH_USER,
    pass: process.env.TRANSPORT_AUTH_PASS,
  },
  tls: { rejectUnauthorized: false },
});

export class SubmitFeedbackService {
  public async sendMail({ subject, body, mail }: ISendMailData): Promise<void> {

    if (!mail) {
      throw new MissingParamError('Mail');
    }

    if (!isValidEmail(mail)) {
      throw new AppError('Invalid mail.');
    }

    try {
      await transport.sendMail({
        from: mail,
        to: process.env.TRANSPORT_AUTH_USER,
        subject,
        html: body
      }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
      });
    } catch (error) {
      console.table(error);
    }

  }
}

