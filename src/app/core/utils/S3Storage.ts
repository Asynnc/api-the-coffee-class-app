import aws, { S3 } from 'aws-sdk';
import mime from 'mime';
import fs from 'node:fs';
import path from 'node:path';
import { multerConfig } from '../../config/multer';
import { AppError } from '../shared/http/errors';

export class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: 'us-east-1'
    });
  }

  async saveFile(fileName: string): Promise<void> {
    const originalPath = path.resolve(multerConfig.directory, fileName);
    const ContentType = mime.getType(originalPath);

    if (!ContentType) {
      throw new AppError('File not found.');
    }

    const fileContent = await fs.promises.readFile(originalPath);

    this.client.putObject({
      Bucket: 'the-coffee-class',
      Key: fileName,
      ACL: 'public-read',
      Body: fileContent,
      ContentType
    }).promise();

    fs.promises.unlink(originalPath);
  }

  async deleteFile(fileName: string): Promise<void> {
    await this.client.deleteObject({
      Bucket: 'the-coffee-class',
      Key: fileName,
    }).promise();
  }
}
