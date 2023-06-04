import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import AuthConfig from '../../../../config/auth';
import { AppError } from '../../../../core/shared/http/errors';
import { User } from '../../../../core/shared/infra/database/mongodb/models/User';
import { IAuthRequest, IAuthResponse } from './AuthenticationUserDTO';
import { setRedis } from '../../../../core/shared/infra/database/redis/client';

export class AuthenticationUserService {

  public async execute({ email, password }: IAuthRequest): Promise<IAuthResponse> {

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      throw new AppError('Email does not exists.', 400);
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = AuthConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expiresIn
    });

    delete user.password;

    await setRedis(`@user-${user.email}:token`, token);
    await setRedis(`@user-${user.email}`, JSON.stringify(user, null, 2));

    return {
      user,
      token
    };
  }
}


