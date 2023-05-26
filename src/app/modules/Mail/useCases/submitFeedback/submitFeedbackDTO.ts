export interface ISendMailData {
  subject: string
  body: string
  mail?: string;
  user?: string
}


export interface IMailProvider {
  sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void>;
}
