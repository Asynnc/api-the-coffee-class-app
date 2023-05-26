import cuid from 'cuid';
import multer from 'multer';
import path from 'node:path';

const uploadsFolder = path.resolve(__dirname, '..', '..', '..', 'uploads');

export const multerConfig = {
  directory: uploadsFolder,
  storage: multer.diskStorage({
    destination(request, file, callback) {
      callback(null, uploadsFolder);
    },
    filename(request, file, callback) {
      callback(null, `${cuid()}-${file.originalname}`);
    }
  })
};
