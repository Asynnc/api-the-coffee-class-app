import { model, Schema } from 'mongoose';

export const User = model('User', new Schema({
  name: { type: String, required: true },
  userName: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false },
  document: { type: String, required: false },
  address: {
    street: { type: String, required: false },
    suite: { type: String, required: false },
    city: { type: String, required: false },
    zipcode: { type: String, required: false },
    phone: { type: String, required: false },
    geo: {
      lat: { type: String, required: false },
      lng: { type: String, required: false },
    }
  },
  isActive: {
    type: Boolean, required: true,
    default: true,
  },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
  orders: {
    type: [{
      order: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Order'
      },
    }]
  }
}));
