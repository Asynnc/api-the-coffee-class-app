import { S3Storage } from '../../../core/utils/S3Storage';

export class DeleteImageService {
  public async execute(file: Express.Multer.File): Promise<void> {
    const s3Storage = new S3Storage;
    await s3Storage.deleteFile(file.filename);
  }
}
