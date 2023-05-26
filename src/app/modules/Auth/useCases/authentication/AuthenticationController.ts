import { Request, Response } from 'express';
import { AuthenticationUserService } from './AuthenticationUserService';

export class AuthenticationUserController {
  constructor(private authenticationUserService: AuthenticationUserService) { }

  async handle(request: Request, response: Response) {

    const { email, password } = request.body;

    const authenticatedUserService = new AuthenticationUserService;

    const result = await authenticatedUserService.execute({ email, password });

    return response.json(result);
  }
}
