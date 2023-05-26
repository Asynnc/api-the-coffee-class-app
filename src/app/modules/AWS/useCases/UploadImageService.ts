import { S3Storage } from '../../../core/utils/S3Storage';

export class UploadImageService {
  public async execute(file: Express.Multer.File): Promise<void> {
    const s3Storage = new S3Storage;
    await s3Storage.saveFile(file.filename);
  }
}
