import { hash } from 'bcryptjs';
import { AppError } from '../../../../core/shared/http/errors';
import { User } from '../../../../core/shared/infra/database/mongodb/models/User';
import { ICreateUser } from './createUserDTO';

export class CreateUserService {
  public async execute({ name, email, password }: ICreateUser) {

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      throw new AppError('This user already exists.', 400);
    }

    const hashedPassword = await hash(password, 8);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    return user;
  }
}
