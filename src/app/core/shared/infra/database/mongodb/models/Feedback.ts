import { model, Schema } from 'mongoose';

export const Feedback = model('Feedback', new Schema({
  user: { type: String, required: true },
  type: { type: String, required: true, enum: ['BUG', 'IDEA', 'OTHER'] },
  comment: { type: String, required: true },
  satisfaction: { type: String, required: true, enum: ['BAD', 'NEUTRAL', 'GOOD'], default: 'NEUTRAL' },
  screenshot: { type: String },
  createdAt: { type: Date, required: true, default: Date.now },
}));
