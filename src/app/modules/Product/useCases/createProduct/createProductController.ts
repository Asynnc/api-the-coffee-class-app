import { Request, Response } from 'express';
import { UploadImageService } from '../../../AWS/useCases/UploadImageService';
import { CreateProductService } from './createProductService';

export class CreateProductController {
  constructor(private createUserService: CreateProductService) { }

  async handle(request: Request, response: Response) {

    const { name, description, price, category, ingredients } = request.body;
    const imageFile = request.file;
    const image = request.file?.filename;

    const ingredientsParsed = JSON.parse(ingredients);

    const uploadImageService = new UploadImageService;

    await uploadImageService.execute(imageFile);

    const createProductService = new CreateProductService;

    const result = await createProductService.execute({ name, description, image, price, category, ingredients: ingredientsParsed });

    return response.json(result);
  }
}
