import { AuthenticationUserController } from './AuthenticationController';
import { AuthenticationUserService } from './AuthenticationUserService';

const authUserService = new AuthenticationUserService();

const authUserController = new AuthenticationUserController(
  authUserService
);

export { authUserController, authUserService };
