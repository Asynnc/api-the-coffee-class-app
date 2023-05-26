import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many accounts created from this IP, please try again after fifteen minutes',
  standardHeaders: true,
  legacyHeaders: false,
});
