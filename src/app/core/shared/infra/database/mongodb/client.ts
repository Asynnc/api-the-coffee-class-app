import mongoose from 'mongoose';

mongoose.connect(`${process.env.MongoDB_URL_Cloud}`)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.error(err));
