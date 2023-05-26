import { Request, Response } from 'express';
import { CreateUserService } from './createUserService';

export class CreateUserController {
  constructor(private createUserService: CreateUserService) { }

  async handle(request: Request, response: Response) {

    const { name, email, password } = request.body;

    const createUserService = new CreateUserService;

    const result = await createUserService.execute({ name, email, password });

    return response.json(result);
  }
}
