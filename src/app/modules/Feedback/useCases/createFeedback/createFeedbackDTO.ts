export interface ICreateFeedback {
  type: 'BUG' | 'IDEA' | 'OTHER',
  comment: string;
  screenshot: string;
  mail: string;
  user?: string;
  satisfaction: 'BAD' | 'NEUTRAL' | 'GOOD'
}
